import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import css from './ContactForm.module.css';

const ContactEditor = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.target;

    setFormData(prev => {
      switch (name) {
        case 'name': {
          const nameRegex = /^[a-zA-Zа-яА-ЯёЁіїєІЇЄ' -]*$/;
          if (!nameRegex.test(value)) {
            return prev; // не обновляем, если символ не подходит
          }
          break;
        }
        case 'number': {
          const phoneRegex = /^[0-9+()\s-]*$/;
          if (!phoneRegex.test(value)) {
            return prev;
          }
          break;
        }
        default:
          break;
      }

      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = formData;

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      {/* Name input */}
      <div className={css['input-container']}>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder=" "
          className={css.input}
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <div className={css.underline}></div>
      </div>

      {/* Number input */}
      <div className={css['input-container']}>
        <input
          id="number"
          name="number"
          type="tel"
          required
          placeholder=" "
          className={css.input}
          value={formData.number}
          onChange={handleChange}
        />
        <label htmlFor="number" className={css.label}>
          Number
        </label>
        <div className={css.underline}></div>
      </div>

      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactEditor;

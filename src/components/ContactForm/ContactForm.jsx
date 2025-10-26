import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import css from './ContactForm.module.css';

const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        const nameRegex = /^[a-zA-Zа-яА-ЯіїєІЇЄ' -]*$/;
        if (nameRegex.test(value)) {
          setName(value);
        }
        break;

      case 'number':
        const phoneRegex = /^[0-9+()\s-]*$/;
        if (phoneRegex.test(value)) {
          setNumber(value);
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css['input-container']}>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder=" "
          className={css.input}
          onChange={handleChange}
          value={name}
        />
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <div className={css.underline}></div>
      </div>

      <div className={css['input-container']}>
        <input
          id="number"
          name="number"
          type="tel"
          required
          placeholder=" "
          className={css.input}
          onChange={handleChange}
          value={number}
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

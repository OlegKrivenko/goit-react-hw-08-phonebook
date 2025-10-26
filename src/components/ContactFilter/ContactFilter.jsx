import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { createFilter } from 'redux/contacts/filterSlice';

import css from './ContactFilter.module.css';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const onChangeFilter = event => {
    const inputValue = event.currentTarget.value;

    // Разрешаем только буквы, пробелы, апостроф и дефис
    const nameRegex = /^[a-zA-Zа-яА-Я' -]*$/;
    if (nameRegex.test(inputValue)) {
      dispatch(createFilter(inputValue));
    }
  };

  return (
    <div className={css.box}>
      <div className={css['input-container']}>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder=" "
          className={css.input}
          value={value}
          onChange={onChangeFilter}
        />
        <label htmlFor="name" className={css.label}>
          Find contacts by name
        </label>
        <div className={css.underline}></div>
      </div>
    </div>
  );
};

export default ContactFilter;

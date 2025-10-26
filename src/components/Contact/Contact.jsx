import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { deleteContact } from 'redux/contacts/operations';

import { MdOutlineDeleteOutline } from 'react-icons/md';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <div className={css.box}>
        <p>{name}:</p>
        <p>{number}</p>
        <button
          type="button"
          className={css.iconButton}
          title="Delete contact"
          onClick={() => dispatch(deleteContact(id))}
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>
    </li>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

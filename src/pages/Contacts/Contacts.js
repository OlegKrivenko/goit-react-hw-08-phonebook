import ContactFilter from '../../components/ContactFilter';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import Container from 'components/Container';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <p className={css.title}>Phonebook</p>
      <ContactForm />
      <p className={css.subtitle}>Contacts list</p>
      <ContactFilter />
      {isLoading && <p>Contacts is loading, please wait...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </Container>
  );
};

export default Contacts;

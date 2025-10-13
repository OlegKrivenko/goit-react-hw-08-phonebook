import ContactFilter from '../../components/ContactFilter';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import Container from 'components/Container';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <ContactFilter />
      {isLoading && <p>Contacts is loading, please wait...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </Container>
  );
};

export default Contacts;

import ContactList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";
import { useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operation";


const Contacts = () => {
  const contactsFromStore = useSelector(state => state.contacts.contacts.items);
  const isLoading = useSelector(state => state.contacts.contacts.isLoading);
  const filterFromStore = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContacts = () => {
    return contactsFromStore.filter(el =>
      el.name.toLowerCase().includes(filterFromStore.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      {isLoading && <Oval wrapperClass="loader" height={20} width={20} />}
      {contactsFromStore.length > 1 && <Filter />}
      <ContactList
        contacts={contactsFromStore}
        filterContacts={getFilterContacts()}
      />
    </div>
  );
};

export default Contacts;
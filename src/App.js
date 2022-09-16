import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, filterValue } from './redux/slice';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleFilterTextChange = filterText => {
    dispatch(filterValue(filterText.target.value));
  };

  const handleSubmit = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`dssd`);
    }
    dispatch(add({ id: nanoid(), name: name, number: number }));
  };

  const deleteItem = id => {
    dispatch(remove(id));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className={css.App}>
        <h1>Phonebook</h1>
        <ContactForm onHandleSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter handleFilterTextChange={handleFilterTextChange} />
        <ContactList deleteItem={deleteItem} />
      </div>
    </>
  );
}

import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export default function App() {
  const initialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? initialState;
  });
  const [filter, setFilter] = useState('');

  const handleFilterTextChange = filterText => {
    setFilter(filterText.target.value);
  };

  const handleSubmit = (name, number) => {
    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      return alert(`dssd`);
    }
    setContacts([...contacts, { name, number, id: nanoid() }]);
  };

  const deleteItem = id => {
    setContacts(contacts.filter(el => el.id !== id));
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
        <Filter
          filter={filter}
          handleFilterTextChange={handleFilterTextChange}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteItem={deleteItem}
        />
      </div>
    </>
  );
}

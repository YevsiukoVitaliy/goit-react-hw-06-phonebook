import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, deleteItem }) => (
  <ul>
    {contacts
      .filter(contact =>
        contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      )
      .map(contact => (
        <Contact contact={contact} deleteItem={deleteItem} key={contact.id} />
      ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

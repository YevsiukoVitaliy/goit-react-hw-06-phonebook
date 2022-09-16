import Contact from 'components/Contact/Contact';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
export const ContactList = ({ deleteItem }) => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  return (
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
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
  deleteItem: PropTypes.func.isRequired,
};

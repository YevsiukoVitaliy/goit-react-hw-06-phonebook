import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default function Contact({ contact, deleteItem }) {
  return (
    <li className={css.contact} id={contact.id}>
      {contact.name}: {contact.number}
      <button
        onClick={() => {
          deleteItem(contact.id);
        }}
        className={css.btnDelete}
        type="button"
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

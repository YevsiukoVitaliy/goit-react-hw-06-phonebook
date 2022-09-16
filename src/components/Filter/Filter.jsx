import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleFilterTextChange }) => (
  <label>
    Find contacts by name
    <input
      className={css.filter}
      type="text"
      placeholder="Search..."
      value={filter}
      onChange={handleFilterTextChange}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterTextChange: PropTypes.func.isRequired,
};

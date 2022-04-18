import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

function Number({ number, onChange }) {
  return (
    <input className={styles.inputStyle}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={number}
      onChange={onChange}
    />
  );
}

Number.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Number;

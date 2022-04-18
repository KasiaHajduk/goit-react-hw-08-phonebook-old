import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

function Name({ name, onChange }) {
  return (
    <input className={styles.inputStyle}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      value={name}
      onChange={onChange}
    />
  );
}

Name.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Name;

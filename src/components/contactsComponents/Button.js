import styles from './Phonebook.module.css';
import PropTypes from 'prop-types';

function Button({ label, type, onClick }) {
  return (
    <button className={styles.buttonStyle} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

function Field({ label }) {
    return (
      <label className={styles.labelStyle} >{label}</label>
    );
}

Field.propTypes = {
  label: PropTypes.string,
};

export default Field;
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';


// const FancyFilterInput = styled.input({
//   width: '100px',
//   '&:focus': { outlineColor: 'blue' },
// });



function Filter({ onChange }) {
  return (
    <div className={styles.page}>
      <span>Find contacts by name    </span>
      <input className={styles.inputStyle} type="text" name="filter" onChange={onChange} />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;

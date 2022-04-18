import { useState } from 'react';
import Button from './Button';
import Name from './Name';
import Number from './Number';
import Field from './Field';
import styles from './Phonebook.module.css';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const value = event.target.value;
    if (event.target.name === 'name') setName(value);
    if (event.target.name === 'number') setNumber(value);
  };

  return <div className={styles.page}> 
    <form className={styles.formStyle} onSubmit={handleSubmit}>
      <Field label="Name" />
      <Name type="text" name={name} onChange={handleChange} />
      <Field label="Number" />
      <Number type="tel" number={number} onChange={handleChange} />
      <Button type="submit" label={'Add contact'} />
    </form>
  </div>
}

export default ContactForm;

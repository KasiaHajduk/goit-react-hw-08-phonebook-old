import React from 'react'; 
import styles from './Button.module.css';

const Button = ({ onSubmit, name, type, onClick }) => <button className={styles.submitStyle} onClick={onClick} type={type} onSubmit={onSubmit}>{name}</button>;

export default Button;
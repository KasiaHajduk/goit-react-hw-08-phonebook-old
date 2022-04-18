import React, { useEffect} from 'react';
import {signOut} from '../../store/slices/authThunk';
import Button from '../../components/Button';
import {fetchUserData} from '../../store/slices/authThunk'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../Page.module.css';

const Home = () => {

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate("/login")
    }

    const navigateToRegister = () => {
      navigate("/register");
    };

  return (
    <div className={styles.page}>
        <h1>HOME</h1>
        <button className={styles.buttonStyle} type="button" onClick={navigateToLogin}>
          Login
        </button>
        <button className={styles.buttonStyle} type="button" onClick={navigateToRegister}>
          Register
        </button>
        <hr />
      
      </div>
    );
 }

export default Home;
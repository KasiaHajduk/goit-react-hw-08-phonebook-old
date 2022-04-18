import React, {useState, useEffect} from 'react';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import {login} from '../../store/slices/authThunk'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../Page.module.css';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { loading,token } = useSelector((state) => state.auth);
    
    useEffect(() => {
        if (token) {
            return navigate("/contacts");
        }
    },[token])

 
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    }

    const Field = (({label}) => {
        return (
            <label className={styles.labelStyle} >{label}</label>
        );
    });

    const navigateToHome = () => {
        navigate("/")
    }

    return <div className={styles.page}>
        <button className={styles.buttonStyle} type="button" onClick={navigateToHome}>
          HOME
        </button>
        <div>
            <h2>Login</h2>
        </div>
        
        <form className={styles.formStyle} onSubmit={handleLogin}>
            <h3>Login form</h3>
            <Field label="User's email:" />
            <FormInput className={styles.inputStyle} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" value={email} />
            <Field label="User password:" />
            <FormInput className={styles.inputStyle} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password}/>
            { loading ? <div className="loading"><span>Loading...</span></div> : <Button type="submit" name="Login"/>}

        </form>

    </div>;
}

export default Login;
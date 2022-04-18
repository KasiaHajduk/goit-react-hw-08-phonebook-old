import React, { useState, useEffect } from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { registerUser } from "../../store/slices/registerThunk";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";
import { setData } from "../../store/slices/auth";
import styles from '../Page.module.css';


const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    const data  = await registerUser({ name, email, password });
    dispatch(setData(data));
    navigate("/contacts");
  };

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
      <h2>Register</h2>
    </div>
  
    <form className={styles.formStyle} onSubmit={handleRegister} >
      <h1>Register form</h1>
        <Field label="User name:" />
        <FormInput className={styles.inputStyle} onChange={(e) => setName(e.target.value)} placeholder="Name" type="name" value={name} />
        <Field label="User's mail:" />
        <FormInput className={styles.inputStyle} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" value={email}/>
        <Field label="User password:" />
        <FormInput className={styles.inputStyle} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password}/>
            
        { loading ? <div className="loading"><span>Loading...</span></div> : <Button className={styles.submitStyle} type="submit" name="Register"/>}
    </form>
  </div>
}

export default Register;

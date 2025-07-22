import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import { login } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import { User } from '../../data/user';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      userData.username === User.username &&
      userData.password === User.password
    ) {
      dispatch(login());
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={classes.loginContainer}>
      <Form className={classes.form} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={classes.inputContainer}>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleChangeField} />
        </div>
        <div className={classes.inputContainer}>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChangeField} />
        </div>

        <button type="submit" className={classes.button}>
          Login
        </button>
      </Form>
    </div>
  );
};

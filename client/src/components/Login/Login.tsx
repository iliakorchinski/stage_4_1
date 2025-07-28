import { useState, useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import classes from './Login.module.css';

import { useAppDispatch } from '../../store/hooks';
import { authThunk } from '../../store/authThunk';

export const Login = () => {
  const initialState = { username: '', password: '', isError: false };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState(initialState);
  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  useEffect(() => {
    setUserData((prevState) => {
      return { ...prevState, isError: false };
    });
  }, [userData.password, userData.username]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await dispatch(authThunk(userData.username, userData.password));
      navigate('/');
    } catch (error) {
      setUserData((prevState) => {
        return { ...prevState, isError: true };
      });
      console.error('Login error:', error);
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
        {userData.isError && <p className={classes.error}>Invalid credentials</p>}

        {!userData.isError && (
          <button type="submit" className={classes.button}>
            Login
          </button>
        )}
      </Form>
    </div>
  );
};

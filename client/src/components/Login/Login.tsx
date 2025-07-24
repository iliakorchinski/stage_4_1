import { useState, useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import { login } from '../../store/authSlice';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const initialState = { username: '', password: '', isError: false };
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        setUserData((prevState) => {
          return { ...prevState, isError: true };
        });
        throw new Error('Authentication failed');
      }
      dispatch(login());
      navigate('/');
    } catch (err) {
      console.error('Error:', err);
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
        {userData.isError && (
          <p className={classes.error}>Invalid credentials</p>
        )}

        {!userData.isError && (
          <button type="submit" className={classes.button}>
            Login
          </button>
        )}
      </Form>
    </div>
  );
};

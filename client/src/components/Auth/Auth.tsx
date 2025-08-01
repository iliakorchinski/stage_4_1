import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import classes from './Auth.module.css';
import { userSignUp } from '../../services/userSignUp';

export const Auth = () => {
  const initialState = {
    username: '',
    password: '',
    repeatPassword: '',
    firstName: '',
    lastName: '',
    age: '',
  };

  const navigate = useNavigate();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [userData, setUserData] = useState(initialState);
  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(errors);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    await userSignUp(setErrors, userData, navigate);
  };

  return (
    <div className={classes.authContainer}>
      <Form onSubmit={handleSubmit} className={classes.form}>
        <h2>Sign Up</h2>
        <p className={classes.inputContainer}>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" onChange={handleChangeField} />
          {errors.username && <span className={classes.error}>{errors.username}</span>}
        </p>
        <p className={classes.inputContainer}>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="text" onChange={handleChangeField} />
        </p>
        {errors.password && <span className={classes.error}>{errors.password}</span>}
        <p className={classes.inputContainer}>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            id="repeatPassword"
            name="repeatPassword"
            type="text"
            onChange={handleChangeField}
          />
        </p>
        {errors.repeatPassword && <span className={classes.error}>{errors.repeatPassword}</span>}
        <p className={classes.inputContainer}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" onChange={handleChangeField} />
        </p>
        {errors.firstName && <span className={classes.error}>{errors.firstName}</span>}
        <p className={classes.inputContainer}>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" onChange={handleChangeField} />
        </p>
        {errors.lastName && <span className={classes.error}>{errors.lastName}</span>}
        <p className={classes.inputContainer}>
          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="text" onChange={handleChangeField} />
        </p>
        {errors.age && <span className={classes.error}>{errors.age}</span>}
        <button type="submit" className={classes.button}>
          Sign Up
        </button>
      </Form>
    </div>
  );
};

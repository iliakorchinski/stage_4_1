import { Form } from 'react-router-dom';
import classes from './Login.module.css';
export const Login = () => {
  return (
    <div className={classes.loginContainer}>
      <Form className={classes.form}>
        <h1>Login</h1>
        <div className={classes.inputContainer}>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div className={classes.inputContainer}>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>

        <button type="submit" className={classes.button}>
          Login
        </button>
      </Form>
    </div>
  );
};

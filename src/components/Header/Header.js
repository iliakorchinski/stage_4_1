import logo from '../../assets/icons/spring-logo.svg';
import classes from './Header.module.css';
import { Menu } from './Menu/Menu';

export const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes['header-container']}>
          <div>
            <a href="/">
              <img src={logo} alt="logo" height="46" />
            </a>
          </div>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

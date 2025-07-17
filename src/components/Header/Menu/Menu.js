import { links } from '../../../data/links';
import classes from './Menu.module.css';
import { MenuItem } from './MenuItem/MenuItem';

export const Menu = () => {
  return (
    <div className={classes.navLinks}>
      <MenuItem links={links} />
      <div>
        <a href="/" className={classes.link}>
          Tanzu Spring
        </a>
      </div>
    </div>
  );
};

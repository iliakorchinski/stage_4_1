import { links } from '../../../data/links';
import classes from './DesktopMenu.module.css';
import { MenuItem } from './MenuItem/MenuItem';

export const DesktopMenu = () => {
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

import { useState } from 'react';
import { Dropdown } from './Dropdown/Dropdown';
import classes from './MenuItem.module.css';
export const MenuItem = ({ links }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  return (
    <div className={classes['links-container']}>
      {links.map((link) => {
        return (
          <div
            key={link.title}
            className={classes['navbar-link-container']}
            onMouseEnter={() => setHoveredLink(link.title)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <span className={classes['navbar-link']}>{link.title}</span>
            {hoveredLink === link.title && (
              <Dropdown links={link.nestedLinks} className={classes.dropdown} />
            )}
          </div>
        );
      })}
    </div>
  );
};

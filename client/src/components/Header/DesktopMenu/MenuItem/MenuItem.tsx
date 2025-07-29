import { FC, useState } from 'react';
import { Dropdown } from './Dropdown/Dropdown';
import classes from './MenuItem.module.css';

import { Link } from '../../../../types/link';

type MenuItemProps = {
  links: Link[];
};

export const MenuItem: FC<MenuItemProps> = ({ links }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
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

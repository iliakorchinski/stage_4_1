import { FC, useState } from 'react';
import { Dropdown } from '../../../DesktopMenu/MenuItem/Dropdown/Dropdown';
import classes from './SidePanelItem.module.css';
import { Link } from '../../../../../types/link';
type SidePanelItemProps = {
  links: Link[];
};

export const SidePanelItem: FC<SidePanelItemProps> = ({ links }) => {
  const [isSelected, setIsSelected] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const handleSelect = (title: string) => {
    setIsSelected(title);
    setToggle((prev) => !prev);
  };
  return (
    <>
      <div className={classes.sideMenuNavigation}>
        {links.map((link) => (
          <div key={link.title} onClick={() => handleSelect(link.title)}>
            <span>{link.title}</span>
            {isSelected === link.title && toggle && (
              <Dropdown
                links={link.nestedLinks}
                className={classes.sideMenuList}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

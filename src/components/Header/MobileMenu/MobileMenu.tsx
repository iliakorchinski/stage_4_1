import burger from '../../../assets/icons/burger-menu.svg';
import classes from './MobileMenu.module.css';
import IconCross from '../../../assets/icons/cross-icon.svg';
import { SidePanel } from './SidePanel/SidePanel';
import { useState } from 'react';
export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className={classes.burgerMenu}>
        <button onClick={handleOpenMenu}>
          <img src={burger} alt="burger" />
        </button>
      </div>
      {isOpen && (
        <>
          <div className={classes.crossIcon} onClick={handleCloseMenu}>
            <button>
              <img src={IconCross} alt="cross-icon" height="32" width="32" />
            </button>
          </div>
        </>
      )}
      <SidePanel isOpen={isOpen} />
    </>
  );
};

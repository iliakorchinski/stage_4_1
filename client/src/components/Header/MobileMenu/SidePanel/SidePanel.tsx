import { FC } from 'react';
import classes from './SidePanel.module.css';
import { links } from '../../../../data/links';
import { SidePanelItem } from './SidePanelItem/SidePanelItem';

type SidePanelProps = {
  isOpen: boolean;
};

export const SidePanel: FC<SidePanelProps> = ({ isOpen }) => {
  return (
    <div className={`${classes.sideMenu} ${isOpen ? classes.open : ''}`}>
      <SidePanelItem links={links} />
    </div>
  );
};

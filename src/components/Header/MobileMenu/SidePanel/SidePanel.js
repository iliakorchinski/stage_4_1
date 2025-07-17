import classes from './SidePanel.module.css';
import { links } from '../../../../data/links';
import { SidePanelItem } from './SidePanelItem/SidePanelItem';
export const SidePanel = ({ isOpen }) => {
  return (
    <div className={`${classes.sideMenu} ${isOpen ? classes.open : ''}`}>
      <SidePanelItem links={links} />
    </div>
  );
};

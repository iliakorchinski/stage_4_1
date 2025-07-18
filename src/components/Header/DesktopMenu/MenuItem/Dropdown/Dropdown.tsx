import { FC } from 'react';
import { DropdownProps } from './Dropdown.types';
export const Dropdown: FC<DropdownProps> = ({ links, className }) => {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link}>
          <a href="/">{link}</a>
        </li>
      ))}
    </ul>
  );
};

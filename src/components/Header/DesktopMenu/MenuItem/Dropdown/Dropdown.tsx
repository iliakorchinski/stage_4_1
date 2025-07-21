import { FC } from 'react';

type DropdownProps = {
  links: string[];
  className?: string;
};

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

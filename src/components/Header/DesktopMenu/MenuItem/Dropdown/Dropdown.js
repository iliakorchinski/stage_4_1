export const Dropdown = ({ links, className }) => {
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

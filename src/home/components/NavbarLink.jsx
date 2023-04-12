export const NavbarLink = ({ title = "", url = "#" }) => {
  return (
    <a
      href={url}
      className="block text-gray-900 hover:bg-gray-100 hover:text-blue-700 p-1 rounded transition-colors duration-200"
      aria-current="page"
    >
      {title}
    </a>
  );
};

import { useState } from "react";
import { NavbarLink } from "./NavbarLink";
import logo from "../../assets/isotipo.png";

export const Navbar = () => {
  const [links, setlinks] = useState(["home", "about"]);

  return (
    <nav className="bg-neutral-800 h-16 flex items-center justify-center">
      <div className="flex flex-wrap items-center justify-center mx-auto px-12 w-full">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src={logo}
            className="h-10 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
            SPECTRA
          </span>
        </a>
        {/* <div className="block w-auto">
          <ul className="font-medium flex rounded-lg flex-row space-x-4 mt-0 border-0 md:bg-white">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <NavbarLink title={link} url={"#"} />
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

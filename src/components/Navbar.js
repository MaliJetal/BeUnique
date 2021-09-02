import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import data from "../data/navbar";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [links, setLinks] = useState(data);

  return (
    <>
      <header className="flex items-center justify-between py-3 my-2 fixed w-full">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav className="Navbar">
          <div className="hidden items-center md:block">
            <ul className="flex items-center">
              {links.map((l) => {
                const { id, link } = l;
                return (
                  <li key={id} className="mx-3">
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        <div className="mx-3 md:hidden">
          <FaBars />
        </div>
      </header>
    </>
  );
};

export default Navbar;

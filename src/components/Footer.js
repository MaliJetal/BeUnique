import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import data from "../data/footer";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterDetails"></div>
      <div className="FooterDown">
        <footer className="flex items-center justify-between inset-x-0 botom-0">
          <span>
            Language: <strong>English</strong>
            <FaChevronDown />
          </span>
          <div>
            <span>© 2021 BeFunky Inc.</span>
            <span>
              <a href="#" name="Terms">
                Terms |
              </a>
              <a href="#" name="Privacy Policy">
                {" "}
                Privacy Policy |
              </a>
              <a href="#" name="Accessibility">
                {" "}
                Accessibility{" "}
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

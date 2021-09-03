import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import data from "../data/footer";

const Footer = () => {
  const [links] = useState(data);
  return (
    <div className="Footer grid grid-row-1 pt-16 pb-12 bg-gray-100">
      <div className="FooterDetails">
        <footer className="p-12 sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:w-1px lg:mx-auto">
          <div className="flex justify-center items-center mb-10 mr-10">
            <ul className="flex border-2 border-black-900 p-4">
              <li className="mx-2">
                <FaPinterest className="text-lg" />
              </li>
              <li className="mx-2">
                <FaTwitter className="text-lg" />
              </li>
              <li className="mx-2">
                <FaFacebook className="text-lg" />
              </li>
              <li className="mx-2">
                <FaInstagram className="text-lg" />
              </li>
              <li className="mx-2">
                <FaLinkedin className="text-lg" />
              </li>
              <li className="mx-2">
                <FaYoutube className="text-lg" />
              </li>
            </ul>
          </div>
          {links.map((footerLink) => {
            const { id, title, links } = footerLink;
            return (
              <div key={id} className="mx-auto px-12">
                <h4 className="font-bold text-lg mb-4">{title}</h4>
                <ul className="mb-2 text-sm text-gray-500 cursor-pointer hover:text-black">
                  {links.map((link) => {
                    return <li key={link}>{link}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </footer>
      </div>
      <div className="FooterDown">
        <footer className="sm:block lg:flex items-center justify-between inset-x-0 botom-0 px-12">
          <span className="flex items-center">
            Language :{" "}
            <select name="language" id="language" className="m-2">
              <FaChevronDown />
              <option value="English">English</option>
              <option value="Espanol">Espanol</option>
              <option value="Portuguese">Portuguese</option>
            </select>
          </span>
          <div className="text text-gray-500 hover:text-black">
            <span className="px-2">© 2021 BeFunky Inc.</span>
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

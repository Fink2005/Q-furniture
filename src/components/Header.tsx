"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBook,
  faSearch,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Gạch",
    "Thiết Bị Phòng Tắm",
    "Sàn Gỗ",
    "Vietceramics",
    "Dự Án",
    "Tin Tức",
    "Showroom",
    "Ý Tưởng",
    "Khuyến Mãi",
  ];

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-black text-white flex justify-between items-center py-2 px-8">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faBook} />
          <span>Catalogue</span>
        </div>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} />
          <span>0000.111.222</span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-gray-100 flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl font-bold">Q-Furniture</h1>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="text-gray-700 text-2xl"
            />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 text-gray-700 font-medium absolute lg:relative bg-gray-100 lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto top-16 lg:top-auto z-10 lg:z-auto`}
        >
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-900 cursor-pointer px-4 py-2 lg:px-0 lg:py-0"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Search and Language */}
        <div className="hidden lg:flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
          />
          <span className="text-gray-700 font-medium cursor-pointer">EN</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

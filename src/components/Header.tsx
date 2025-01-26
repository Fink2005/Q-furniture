import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBook, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
          <h1>Q-Furniture</h1>
        </div>

        {/* Menu Items */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-gray-900 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Search and Language */}
        <div className="flex items-center space-x-4">
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

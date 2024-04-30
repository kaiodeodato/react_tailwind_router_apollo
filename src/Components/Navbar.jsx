import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold text-white">Logo</span>
        </Link>
        <div className="md:hidden  flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`flex w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`} id="navbarDrop">
          <ul className="flex flex-col text-center font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 bg-gray-900">
            <li>
              <Link to="/" className="block py-2 px-3 md:p-0 text-white hover:text-blue-800">Home</Link>
            </li>
            <li>
              <Link to="Sobre" className="block py-2 px-3 md:p-0 text-white hover:text-blue-800">Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

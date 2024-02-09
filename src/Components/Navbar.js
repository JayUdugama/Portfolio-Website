import React, { useState } from 'react';
import Logo from '../Assests/Logo.png';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed w-full z-20 top-0 bg-orange-100 bg-opacity-80 p-1'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto'>
        <img src={Logo} alt='Logo' className='h-8 ml-4' />
        <div className='flex md:order-2'>
          <button
            onClick={toggle}
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:ring-gray-200'
          >
            <AiOutlineMenuUnfold className='text-orange-400 text-lg'></AiOutlineMenuUnfold>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul
            className={`flex p-2 md:p-0 mt-2 text-sm border cursor-pointer border-orange-100 rounded-lg md:flex-row md:space-x-4 md:mt-0 md:border-0 ${
              isOpen ? 'bg-orange-100 bg-opacity-70' : ''
            }`}
          >
            <Link spy={true} to='Home' smooth={true} duration={500}>
              <li>
                <div className='block py-1 pl-2 pr-3 rounded hover:text-orange-600 text-green-700'>
                  Home
                </div>
              </li>
            </Link>

            <Link spy={true} to='Overview' smooth={true} duration={500}>
              <li>
                <div className='block py-1 pl-2 pr-3 rounded hover:text-orange-600 text-green-700'>
                  About
                </div>
              </li>
            </Link>

            <Link spy={true} to='Projects' smooth={true} duration={500}>
              <li>
                <div className='block py-1 pl-2 pr-3 rounded hover:text-orange-600 text-green-700'>
                  Projects
                </div>
              </li>
            </Link>

            <Link spy={true} to='Cont' smooth={true} duration={500}>
              <li>
                <div className='block py-1 pl-2 pr-3 rounded hover:text-orange-600 text-green-700'>
                  Contact
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

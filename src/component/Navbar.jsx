import React, { useState } from 'react';
import { FaRegCircle } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=' text-white font-serif'>
      <div className='flex justify-between items-center px-5 md:px-10 py-5'>
        <div className='flex gap-5 items-center text-black'>
          <div className='bg-white rounded-full p-2 '>           
            <div className=" md:mx-0">
            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFRhefH-vGhSg/company-logo_200_200/company-logo_200_200/0/1733288059707/vrv_security_logo?e=2147483647&v=beta&t=5ZpYyfUsqh6JWLSuzNnD7kyGoR94iJf72WjMnNGHN3k" alt="" className="w-10" />
          </div>
          </div>
        </div>

        <div className='sm:hidden'>
          <button onClick={toggleMenu}>
            {isMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

          <Link to="/admin/franchise-management">
        <div className='flex gap-5 text-xl font-khand font-bold text-red-500 items-center'>
          <div className='hidden md:block hover:cursor-pointer hover:underline'>Login Dashboard</div>
          <div>
            <TbLayoutDashboardFilled size={24} />
          </div>
        </div>
          </Link>
      </div>
    </div>
  );
};

export default Navbar;

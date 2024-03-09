import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import hamburger from './hamburger.png'
import list from './list.png'


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const { isLogin, disLogin,setIsLogin,setDisLogin} = useAuth();

  const handlelogout = async () =>{
    localStorage.clear();
    setIsLogin(false);
    setDisLogin(false);
    setDropdownOpen(false)
    setNavbarOpen(false);
  }
  const styl = {
    'backdrop-filter': 'blur(10px)',
  //  ' background-image': 'linear-gradient(to right, #ff4500, #ff0000)'
  }

  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-gradient-to-r from-[#d7e4e2] to-[#bce6e0] glass-effect">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/'} className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Victus</span>
        </Link>
        <div className="flex items-center md:order-2 relative">
          <ul className='flex'>
            {(!isLogin && !disLogin) && <li className='list-none'>
              <Link to={'/login'} className="hidden md:block py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent  md:pr-4 font-bold">Login</Link>
            </li>}
          </ul>
          {(isLogin || disLogin) && <button onClick={() => setDropdownOpen(!dropdownOpen)} type="button" className="hidden md:flex mr-3 text-sm rounded-full md:mr-0">
            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="" />
          </button>}
          <div className={`${dropdownOpen ? "flex" : "hidden"} text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-10 right-0`}>
            <ul className="py-2">
              <li>
                <NavLink to={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to={'/'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:">Edit Profile</NavLink>
              </li>
              {(isLogin || disLogin) && <li>
                <button onClick={handlelogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:e">Log out</button>
              </li>}
            </ul>
          </div>
          <button onClick={() => setNavbarOpen(!navbarOpen)} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm rounded-lg md:hidden ">
            {navbarOpen ? (
              <img src={list} alt="" className='' />
            ) : (
              <img src={hamburger} alt="" className='w-6 h-5' />
            )}
          </button>
        </div>
        <div className={`items-center justify-between ${navbarOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
          <ul className=" flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink activeClassName={'activeclass'} to={'/'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#33a398] md:p-0 text-xl">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName={'activeclass'} to={'/aboutus'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#33a398] md:p-0 text-xl">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName={'activeclass'} to={'/contact'} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#33a398] md:p-0 text-xl">Contact</NavLink>
            </li>
            {(isLogin || disLogin) && <li className='md:hidden'>
              <button onClick={handlelogout} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45ccbe] md:p-0 ">Log Out</button>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// SideBar.js
import React, { useEffect, useState } from 'react';
import './SideBar.css'; // You can remove this line if not needed
import control from './assets/control.png';
import Calendar from './assets/Calendar.png';
import Chart from './assets/Chart.png';
import logo from './assets/logo.png';
import Chart_fill from './assets/Chart_fill.png';
import Chat from './assets/Chat.png';
import Folder from './assets/Folder.png';
import Search from './assets/Search.png';
import Setting from './assets/Setting.png';
import User from './assets/User.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function SideBarDoc() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: 'Dashboard', src: Chart_fill, Link: '/homeDoc' },
    { title: 'Messages', src: Chat, Link: '/homeDoc/inbox' },
    { title: 'Visits', src: User, gap: true,  Link: '/' },
    { title: 'Schedule', src: Calendar, Link: '/' },
    { title: 'Profile', src: Search,Link:'/homeDoc/profile'},
    { title: 'Treatment History', src: Chart, Link: '/' },
    { title: 'Files', src: Folder, gap: true, Link: '/' },
    { title: 'Setting', src: Setting, Link: '/' },
  ];
  const {disLogin} = useAuth();
  return (
    <div className="flex">
      {disLogin ? (
        <div className={`bg-dark-purple h-screen p-5 pt-8 relative duration-300 side-nav ${open ? 'w-72' : 'w-20'}`}>
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full rotate-180 ${!open ? 'rotate-180' : ''}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${open ? 'rotate-[360deg]' : ''}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open ? 'scale-0' : ''}`}
          >
            MEDD-TECH
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 ? 'bg-light-white' : ''}`}
            >
              <Link to={Menu.Link}>
                <div className='flex gap-10'>
                  <img src={Menu.src} alt={Menu.title} />
                  <span className={`origin-left duration-200 ${!open ? 'hidden' : ''}`}>
                    {Menu.title}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      ):""}
    </div>
  );
}

export default SideBarDoc;

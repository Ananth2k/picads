    import React, { useState } from 'react'
    import logo from "../assets/icons/logo.svg"
    import {Menu, X,UserRoundCheck,House, FileText, MessageSquareText, Settings, BadgeQuestionMark } from 'lucide-react'
    import { NavLink, useLocation } from 'react-router-dom'


function Sidebar() {
  const menuItems = [
    { icon: <House />, label: "Home", link:'/' },
    { icon: <FileText />, label: "Reports", link:'/reports' },
    { icon: <MessageSquareText />, label: "Feedback", link:'/feedback' },
    { icon: <Settings />, label: "Settings", link:'/settings' },
    { icon: <BadgeQuestionMark />, label: "Help", link:'/help' },
  ]

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
    <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-1 left-1 z-50 p-2 rounded-lg bg-white shadow-md"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    <aside 
     className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:w-64 bg-theme
          flex flex-col justify-between
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
      <div>
        <img src={logo} alt="logo" className="w-40 mx-auto" />
        <div>
          {menuItems.map((item, index) => (
            <NavLink
                to={item.link}
                key={index}
                className={({ isActive }) =>
                    `flex items-center px-2 py-2 cursor-pointer
                    transition-all duration-300 ease-in-out
                    ${isActive ? "bg-[#F0F7FD] theme-text" : "hover:bg-[#F0F7FD] text-gray-700"}`
                }
                >
                <div
                    className={`w-[4px] h-6 rounded-lg mr-2 transition-all duration-300 ease-in-out
                    ${location.pathname === item.link ? "bg-[#007AD9] translate-x-0 opacity-100" : "bg-transparent -translate-x-2 opacity-0"}`}
                ></div>

                <div className="flex gap-3 px-3 items-center transition-all duration-300 ease-in-out">
                    {item.icon}
                    <p className="font-semibold text-md">{item.label}</p>
                </div>
                </NavLink>


          ))}
        </div>
      </div>
      <div className='flex flex-col mx-auto px-3 py-4 space-y-4'>
        <div className={`bg-[#A0CAEA] w-full rounded-sm h-1`}></div>
        <div className='flex items-center gap-3'>
          <UserRoundCheck />
          <span className='text-sm font-semibold'>Admin Module</span>
        </div>
      </div>
    </aside>
    </>
  )
}

    export default Sidebar

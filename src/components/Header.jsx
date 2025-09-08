'use client'

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const handleMouseEnter = (menu: string) => setActiveMenu(menu)
  const handleMouseLeave = () => setActiveMenu(null)

  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-widest">
          INTU<span className="inline-block relative top-[-0.35em] text-sm">•</span>ITIVE
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium text-gray-900 relative">
          {['Products & Services', 'Healthcare Professionals', 'Patients', 'About'].map((item) => (
            <li
              key={item}
              className="relative pb-1 cursor-pointer"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`transition-colors ${
                  activeMenu === item ? 'text-blue-600' : 'text-gray-900'
                }`}
              >
                {item}
              </div>
              {/* Blue underline */}
              <div
                className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-200 ${
                  activeMenu === item ? 'w-full' : 'w-0'
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Search Icon */}
        <div className="hidden md:block text-gray-400">
          <FaSearch size={16} />
        </div>
      </div>

      {/* Submenu */}
      {activeMenu === 'Healthcare Professionals' && (
        <div className="bg-white border-t border-gray-200 py-4">
          <div className="max-w-screen-xl mx-auto px-6 flex space-x-10 text-sm text-gray-500">
            {['Surgeons', 'OR Staff', 'Hospital Executives', 'Referring Physicians', 'Academics'].map(
              (subItem) => (
                <div key={subItem} className="hover:text-gray-900 cursor-pointer">
                  {subItem}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

import React from 'react';
import { Bell, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-full mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-800">
              IHG SmartRoom Management
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-6 h-6 text-gray-600" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-700">Admin User</span>
              <User className="w-8 h-8 text-gray-600 bg-gray-100 rounded-full p-1" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
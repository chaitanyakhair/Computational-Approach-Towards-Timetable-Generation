// src/Sidebar.jsx
import React, { useState } from 'react';
import userImage from './assets/user.png';
import newImage from './assets/new.png';

const Sidebar = ({ setToken, setActiveComponent }) => {
  const [showMenu, setShowMenu] = useState(false);
  const savedTTs = ['Time Table 1', 'Time Table 2', 'Time Table 3', 'Time Table 4'];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="w-24 bg-gray-100 p-4 flex flex-col items-center relative">
      <button id="accountBtn" className="mb-4" onClick={toggleMenu}>
        <img src={userImage} alt="Account" className="h-10" />
      </button>
      {showMenu && (
        <div className="absolute top-16 left-0 bg-white border rounded shadow-lg w-48">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Edit Profile</button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-200" onClick={handleLogout}>Log Out</button>
        </div>
      )}
      <hr className="w-full mb-4" />
      <button id="createNewTTBtn" className="mb-4" onClick={() => setActiveComponent('create')}>
        <img src={newImage} alt="New TimeTable" className="h-10" />
      </button>
      <div className="flex flex-col items-center space-y-2">
        {savedTTs.map((tt, index) => (
          <button key={index} className="text-xs bg-blue-500 text-white p-2 rounded w-full" onClick={() => setActiveComponent('dummy')}>
            {tt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
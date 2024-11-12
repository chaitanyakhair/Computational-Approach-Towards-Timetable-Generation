// src/App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Login from './Login';
import Create from './Create';
import { Dummy } from './Dummy';
import './App.css';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [activeComponent, setActiveComponent] = useState('create'); 

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'create':
        return <Create />;
      case 'dummy':
      default:
        return <Dummy />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setToken={setToken} setActiveComponent={setActiveComponent} />
      {renderComponent()}
    </div>
  );
};

export default App;
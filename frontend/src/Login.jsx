// src/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isRegister) {
      try {
        await axios.post('http://localhost:5000/register', { username, password });
        alert('User registered successfully');
        setIsRegister(false);
      } catch (error) {
        console.error('Registration failed', error);
      }
    } else {
      try {
        const response = await axios.post('http://localhost:5000/login', { username, password });
        setToken(response.data.token);
      } catch (error) {
        console.error('Login failed', error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen"
    >
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">{isRegister ? 'Register' : 'Login'}</h2>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full mb-4">
          {isRegister ? 'Register' : 'Login'}
        </button>
        <button
          type="button"
          onClick={() => setIsRegister(!isRegister)}
          className="text-blue-500 underline w-full"
        >
          {isRegister ? 'Already have an account? Login' : 'Register new user'}
        </button>
      </form>
    </div>
  );
};

export default Login;


{/*
style={{
  //backgroundImage: 'url(./assets/background.jpg)', // Adjust the path if necessary
  //backgroundSize: 'cover',
  //backgroundPosition: 'center',
  //overflow: 'hidden',
}}
*/}
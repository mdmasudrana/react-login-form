import React, { useState } from 'react';
import Welcome from './Welcome';

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      setIsFormValid(false);
      return;
    }

    try {
      const response = await fetch(
        'https://1ede0eec-d9a7-4a6d-807c-a3b88f328a0d.mock.pstmn.io/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='container mx-auto'>
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        {isLoggedIn ? (
          <Welcome />
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Login Form</h2>
            {!isFormValid && (
              <div className="text-red-600 mb-2">Please fill out both fields.</div>
            )}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white p-2 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default LoginComponent;

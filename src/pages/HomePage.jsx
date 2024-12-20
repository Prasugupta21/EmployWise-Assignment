import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/users-list');
    }
  }, [navigate]);

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to EmployWise Platform
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Let's get started by logging in to your account
        </p>

        <button 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default HomePage;
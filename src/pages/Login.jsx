
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, EyeOff, Eye, AlertCircle, Info } from 'lucide-react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showCredentials, setShowCredentials] = useState(false);
  const navigate = useNavigate();
  const validEmail = "eve.holt@reqres.in";
  const validPassword = "cityslicka";
  
  // Auto-dismiss error after 3 seconds
  useEffect(() => {
    let timeoutId;
    if (error) {
      timeoutId = setTimeout(() => {
        setError('');
      }, 3000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [error]);
  
  const handleSubmit = async(e) => {
    setError('');
    e.preventDefault();
    if(validEmail !== email || password !== validPassword) {
      setError("Invalid email or password.");
      return;
    }
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      const {token} = response.data;    
      const expiryTime = new Date().getTime() + 60 * 60 * 1000;
      localStorage.setItem("token", token);
      localStorage.setItem("expiryTime", expiryTime);
      localStorage.setItem('email', email);
      navigate('/users-list');
    } catch(error) {
      setError("Failed to login. Please try again.");
      console.log('failed to login ', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl backdrop-blur-sm border border-gray-100">
          <div className="p-8">
            <div className="text-center mb-8 space-y-2">
              <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
              <p className="text-gray-600 text-sm">Enter your credentials to continue</p>
            </div>

            {/* Mock Credentials Card */}
            <div className="mb-6 ">
              <button
                onClick={() => setShowCredentials(!showCredentials)}
                className="w-full flex gap-2 p-3 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors"
              >
                <Info className="h-5 w-5 " />
                <span className="text-sm  font-medium  ">Click to {showCredentials ? 'hide' : 'view'} mock credentials</span>
              </button>
              
              {showCredentials && (
                <div className="mt-2  text-center p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700 text-center">Email: {validEmail}</span>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Lock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Password: {validPassword}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Error Alert with animation */}
            {error && (
              <div className="mb-6 flex items-center gap-2 p-4 bg-red-50 rounded-lg text-red-700 animate-fade-in">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? 
                      <EyeOff className="h-5 w-5" /> : 
                      <Eye className="h-5 w-5" />
                    }
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          By signing in, you agree to our{' '}
          <Link 
            to="/terms" 
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Terms
          </Link>
          {' '}and{' '}
          <Link 
            to="/privacy" 
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
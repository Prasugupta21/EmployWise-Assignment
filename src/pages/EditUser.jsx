
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Alert from '../components/Alert';


const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchUser();
  }, [id]);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await response.json();
      setFormData({
        first_name: data.data.first_name,
        last_name: data.data.last_name,
        email: data.data.email,
      });
    } catch (error) {
      showAlert('Error fetching user details', 'error');
      setTimeout(() => navigate('/users-list'), 2000);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        showAlert('User updated successfully', 'success');
        setTimeout(() => {
          navigate('/users-list', { 
            state: { 
              alert: { 
                message: 'User updated successfully', 
                type: 'success' 
              } 
            } 
          });
        }, 1000);
      }
    } catch (error) {
      showAlert('Error updating user', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="w-8 h-8 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar/>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-md mx-auto">
          {alert && 
           <div className="absolute top-0 right-0 w-full sm:w-auto">
          <Alert message={alert.message} type={alert.type} /> </div>}
          
          <form onSubmit={handleSubmit} className="bg-white mt-32 shadow rounded-lg overflow-hidden">
          <h1 className="text-xl text-center m-8 sm:text-2xl font-bold text-blue-600">Edit User</h1>

            <div className="p-4 sm:p-6 space-y-5">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-base focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-base focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-base focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {/* Fixed bottom buttons for mobile */}
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 sm:px-6">
              <div className="flex flex-col sm:flex-row-reverse gap-3 sm:gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {submitting ? 'Updating...' : 'Update User'}
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/users-list')}
                  disabled={submitting}
                  className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;







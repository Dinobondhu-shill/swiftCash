import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        axios.post('http://localhost:5000/verifyToken', { token })
          .then(response => {
            if (response.data.valid) {
              const decodedUser = jwtDecode(token);
              setUser(decodedUser);
            } else {
              localStorage.removeItem('token');
            }
          })
          .catch(error => {
            console.error('Token verification failed:', error);
            localStorage.removeItem('token');
          });
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (identifier, pin) => {
    try {
      const { data } = await axios.post('http://localhost:5000/login', { identifier, pin });
      if (data.success) {
        localStorage.setItem('token', data.token);
        const decodedUser = jwtDecode(data.token);
        setUser(decodedUser);
        Navigate('/')
        toast.success('Logged in successfully!');
        return data;
      } else {
        toast.error(data.message);
        return data;
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const userInfo = { user, login, logout, loading };

  return (
    <AuthContext.Provider value={userInfo}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        children
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </AuthContext.Provider>
  );
};

export default AuthProvider;

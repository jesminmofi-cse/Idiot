import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('https://idiot-xtgi.onrender.com/api/auth/login', formData);
    const { token, username } = res.data;

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      navigate('/home');
    
    } else {
      throw new Error('Invalid token received');
    }
  } catch (err) {
    setError(err.response?.data?.message || 'Login failed. Please try again.');
  }
};


  return (
    <div className="auth-container">
      <h2>Welcome Back to Chroniclely 💫</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button className="link-button" onClick={() => navigate('/register')}>
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginPage;

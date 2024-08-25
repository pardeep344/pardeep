// src/routes/SignUp.js
import React, { useState } from 'react';
import "./SingUp.css"
import Navbar from '../components/navbar/Navbar';
function SignUp() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
    <Navbar/>
    <div className="signup-container">
      <h2 >Sign Up</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label >Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label  >Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange}  />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </>);
}

export default SignUp;

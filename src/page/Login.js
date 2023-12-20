import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import './css/Login.css'; // Import the CSS file

import { setCurrentUser } from '../actions/userActions';

const Login = () => {
  const [users, setusers] = useState(useSelector((state) => state.users.users));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const foundUser = users.find(user => user.email === username && user.password === password);
    if (foundUser !== undefined){

      dispatch(setCurrentUser(foundUser));
      navigate('/homepage')
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className='container'>
      {/* <h2>Login</h2> */}
      <center>
      <form>
        <div className='fieldss'>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='fieldss'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>.
      </p>
      </center>
    </div>
  );
};

export default Login;

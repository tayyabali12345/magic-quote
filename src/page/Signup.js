import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser,  addUser } from '../actions/userActions';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [picture, setPicture] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nextUserId = useSelector(state => state.users.nextUserId);

  const handleSignup = () => {
    if (password === confirmPassword) {
      const newUser = {
        id: nextUserId,
        username,
        firstname,
        lastname,
        password,
        gender,
        picture,
      };

      dispatch(addUser(newUser));
      dispatch(setCurrentUser(newUser));
      navigate('/homepage');
    } else {
      setErrorMessage('Passwords do not match');
    }
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>User Picture:</label>
          <input type="file" accept="image/*" onChange={handlePictureChange} />
        </div>
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default Signup;

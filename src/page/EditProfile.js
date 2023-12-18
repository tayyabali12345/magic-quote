// EditProfile.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCurrentUser } from '../actions/userActions';

const EditProfile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users.currentUser);
  const [editedUser, setEditedUser] = useState(currentUser || {});

  useEffect(() => {
    setEditedUser(currentUser || {});
  }, [currentUser]);

  const handleFirstNameChange = (e) => {
    setEditedUser(prevState => ({
      ...prevState,
      first_name: e.target.value,
    }));
  };

  const handleLastNameChange = (e) => {
    setEditedUser(prevState => ({
      ...prevState,
      last_name: e.target.value,
    }));
  };

  const handleGenderChange = (e) => {
    setEditedUser(prevState => ({
      ...prevState,
      gender: e.target.value,
    }));
  };

  const handlePasswordChange = (e) => {
    setEditedUser(prevState => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleSaveChanges = () => {
    console.log(editedUser);
    dispatch(editCurrentUser(editedUser));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={editedUser.first_name || ''}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={editedUser.last_name || ''}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select value={editedUser.gender || ''} onChange={handleGenderChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={editedUser.password || ''}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;

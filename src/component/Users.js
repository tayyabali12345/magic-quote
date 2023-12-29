import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { followUser } from '../actions/userActions';

export default function Users() {
  const users = useSelector((state) => state.users.users);
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

  const handleFollowRequest = (userId) => {
    dispatch(followUser([ userId, currentUser.id ]));
  }

  return (
    <div>
      <h2>Users List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
              <Link className="Link" to={`/user/${user.id}`}>
                Show User
              </Link>

              <button onClick={()=>{handleFollowRequest(user.id)}}>Follow</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}




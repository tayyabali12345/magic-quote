import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function User() {
  const { userId } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find(user => user.id == userId);

  return (
    <div>
       <Link to='/users' >Back</Link>
      <h2>User Detail</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}




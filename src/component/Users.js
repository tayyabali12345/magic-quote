import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Users() {
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      <h2>Tags List</h2>
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
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}




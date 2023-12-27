import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Link className="sidebar-link" to="/user/edit">
        Edit Profile
      </Link>
      <Link className="sidebar-link" to="/user/quote">
        Quote Profile
      </Link>
      <Link className="sidebar-link" to="/users">
        Show All Users
      </Link>
      <Link className="sidebar-link" to="/users/tags">
        Show All Tags
      </Link>
      <Link className="sidebar-link" to="/users/quotes">
        Show All Quotes
      </Link>
      <Link className="sidebar-link" to="/users/reported-quotes">
        Show All Reported Quotes
      </Link>
    </aside>
  );
};

export default Sidebar;

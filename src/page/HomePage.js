import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ShowQuote from '../component/CreatedQuotes';
import AllTags from '../component/AllTags';

export default function HomePage() {
  const users = useSelector((state) => state.users.users);

  return (
    <div>

      <Link className="Link" to="/user/edit">
        Edit Profile
      </Link>

      <br/>
      <Link className="Link" to="/user/quote">
        Quote Profile
      </Link>

        <br/>
      <Link className="Link" to="/users">
        Show All Users
      </Link>
      <br/>
      <Link className="Link" to="/users/tags">
        Show All Tags
      </Link>
      <br/>
      <Link className="Link" to="/users/quotes">
        Show All quotes
      </Link>

      <ShowQuote/>
      <AllTags/>
    </div>
  )
}

import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import ShowQuote from '../component/CreatedQuotes';
import AllTags from '../component/AllTags';

export default function HomePage() {
  const users = useSelector((state) => state.users.users);

  return (
    <>
      <ShowQuote/>
      <AllTags/>
    </>
  )
}

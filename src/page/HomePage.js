import React from 'react'
import { useSelector } from "react-redux";
import ShowQuote from '../component/CreatedQuotes';
import AllTags from '../component/AllTags';

export default function HomePage() {

  return (
    <>
      <ShowQuote/>
      <AllTags/>
    </>
  )
}

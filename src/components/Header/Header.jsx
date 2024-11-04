import React from 'react'
import "./header.css"
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import Nav from '../Nav/Nav'


export default function Header() {
  return (
    <header id='header' className='header fixed-top align-items-center d-flex'>
      {/* {logo} */}
      <Logo />
      {/* search bar */}
      <SearchBar />
      {/* nav */}
      <Nav />
    </header>
  )
}
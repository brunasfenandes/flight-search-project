import '../Header/Header.scss';
import NavBar from '../NavBar/NavBar';
import { useState } from 'react';


export default function Header({ isDarkMode, toggleDarkMode }) {
  
  return (
    <>
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  )
}
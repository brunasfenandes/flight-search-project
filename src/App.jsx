import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

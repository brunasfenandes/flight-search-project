import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header/>
        <ToastContainer 
        position="top-center"
        // autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        />
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

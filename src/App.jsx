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
import Footer from './components/Footer/Footer';
import FlightDetailsPage from './pages/FlightDetailsPage/FlightDetailsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  return (
    <>
      <div className={`app app__${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <BrowserRouter>
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          closeOnClick
          pauseOnHover
          draggable
          theme={isDarkMode ? 'dark' : 'light'}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flight/:id" element={<FlightDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

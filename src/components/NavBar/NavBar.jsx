import './NavBar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import LightModeIcon from '@mui/icons-material/LightMode';
import flights from '../../assets/logos/6677cac63e33d4e28443be10_flights-icon.svg'
import { Link } from 'react-router-dom';

export default function NavBar({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <nav className='nav'> 
        <div className='nav__left'>
          <button className='nav__left--menu'>
            <MenuIcon />
          </button>

          <Link to='/'>
            <img
              className='nav__logo'
              src={flights}
              alt='Flights Logo'
            />
          </Link>
        </div>
        
        <div className='nav__right'>
          <div className='nav__icon'>
            <button 
              className='nav__left--menu'
              onClick={toggleDarkMode}
              aria-label='Toggle Dark Mode'
            >
              {isDarkMode ? (
                <LightModeIcon style={{ color: '#ffffff' }} />
              ) : (
                <DarkModeIcon style={{ color: '#000000' }} />
              )}
            </button>
            
            <button className='nav__left--menu'>
              <AppsIcon />
            </button>
          </div>

          <div className='nav__right--user'></div>
        </div>
      </nav>
    </>
  )
}
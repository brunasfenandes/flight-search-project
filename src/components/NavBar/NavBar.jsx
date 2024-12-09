import './NavBar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import flights from '../../assets/logos/Google_Flights_logo.svg'

export default function NavBar() {
  return (
    <>
      <nav className='nav'> 
        <div className='nav__left'>
          <button className='nav__left--menu'>
            <MenuIcon />
          </button>

          <img
            className='nav__logo'
            src={flights}
            alt='Flights Logo'
          />
        </div>
        
        <div className='nav__right'>
          <div className='nav__icon'>
            <button className='nav__left--menu'>
              <DarkModeIcon/>
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
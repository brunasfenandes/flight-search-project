import './Hero.scss';
import travel from '../../assets/images/2666371.webp'
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

export default function Hero() {
  return (
    <>
      <div className='hero'>
        <div className='hero__image' >
          <img
          className='hero__image--img'
            src={travel}
            alt='Travel Around the World Image'
          />
        </div>
        
        <div className='hero__title'>Flights</div>

        <form className='hero__form'>
          <div className='hero__icon-cont'>
            <div className='hero__icon-cont--comp'>
              <TripOriginIcon/>
            </div>

            <div className='hero__icon-cont--comp2'>
              <SwapHorizIcon/>
            </div>

            <input className="hero__form--input" type='text'  placeholder='Toronto'></input>
            <input className="hero__form--input" type='text'  placeholder='To?'></input>
          </div>

          <div className='hero__cont'>
            <input  className="hero__cont--input" type='text'  placeholder='Departure'></input>

            <input  className="hero__cont--input  hero__cont--input2" type='text'  placeholder='Arrival'></input>
          </div>
        </form>

        <button className='button button--explore'>
          Explore
        </button>
      </div>
    </>
  )
}
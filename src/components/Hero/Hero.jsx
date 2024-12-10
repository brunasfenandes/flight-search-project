import './Hero.scss';
import travel from '../../assets/images/2666371.webp'
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import axios from 'axios';

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

        <form 
          className='hero__form'
        >
          <div className='hero__icon-cont'>
            <div className='hero__icon-cont--comp'>
              <TripOriginIcon/>
            </div>

            <div className='hero__icon-cont--comp2'>
              <SwapHorizIcon/>
            </div>

            <div className='hero__icon-cont--comp3'>
              <LocationOnIcon/>
            </div>

            <div className='hero__icon-cont--comp4'></div>

            <div className='hero__icon-cont--comp5'></div>

            <input 
              className="hero__form--input" 
              type='text'  
              placeholder='From'
            />

            <input 
              className="hero__form--input hero__form--input2" 
              type='text'  
              placeholder='Where to?'
            />
          </div>

          <div className='hero__cont'>

            <div className='hero__icon-cont--comp6'>
              <DateRangeIcon/>
            </div>

            <input  
              className="hero__cont--input" 
              type='date'  
              placeholder='Departure'
            />

            <input  className="hero__cont--input  hero__cont--input2" type='text'  placeholder='Return'></input>
          </div>
        </form>

        <button className='button button--explore'>
          <SearchIcon/>
          Explore
        </button>
      </div>
    </>
  )
}
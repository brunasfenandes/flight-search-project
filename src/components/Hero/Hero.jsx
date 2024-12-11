import './Hero.scss';
import travel from '../../assets/images/2666371.webp'
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FlightsList from '../FlightsList/FlightsLis';


export default function Hero() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchSkyIds = async (location) => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport', {
        params: {
          query: location,
          locale: 'en-US',
        },
        headers: {
          'X-RapidAPI-Key': '5cff7a3eb5msh8793c3941b8b594p1ce3a3jsn5ee738df63b3',
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        }
      });


      setLoading(false);
      console.log('API Response:', data);
      return data.data;
    } catch (error) {
      setLoading(false);
      setError('Error fetching data. Please try again later.');
      console.error('Error fetching SkyId:', error);
      return null;
    }
  };

  const fetchFlights = async (originSkyId, destinationSkyId, originEntityId, destinationEntityId, date, returnDate) => {
    
    console.log('Parameters passed to fetchFlights:', {
      originSkyId,
      destinationSkyId,
      originEntityId,
      destinationEntityId,
      date,
      returnDate
    });

    try {
      setLoading(true);

      const { data } = await axios.get('https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights', {
        params: {
          originSkyId,
          destinationSkyId,
          originEntityId,
          destinationEntityId,
          date,
          returnDate,
        },
        headers: {
          'X-RapidAPI-Key': '5cff7a3eb5msh8793c3941b8b594p1ce3a3jsn5ee738df63b3',
          'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
        },
      });
  
    setLoading(false);
    console.log('API Response', data);
    return data.data;
  } catch (error) {
    setLoading(false);
    setError('Error fetching flights. Please try again later.');
    console.error('Error fetching flights:', error);
    return null;
  }
};

  const handleSearch = async () => {
    if (!from || !to || !departure) {
      setError('Please fill out all required fields.');
      return;
    }
  
    const originData = await fetchSkyIds(from || 'New York'); 
    const destinationData = await fetchSkyIds(to || 'London');
  
    if (!originData || !destinationData) {
      setError('Could not fetch location data.');
      return;
    }
  
    const originSkyId = originData[1]?.skyId; 
    const destinationSkyId = destinationData[1]?.skyId;
    const originEntityId = originData[1]?.entityId;
    const destinationEntityId = destinationData[1]?.entityId;
  
    if (!originSkyId || !destinationSkyId) {
      setError('Sky ID data is missing.');
      return;
    }
  
    console.log('originSkyId:', originSkyId);
    console.log('destinationSkyId:', destinationSkyId);
  
    try {
      const flights = await fetchFlights(
        originSkyId,
        destinationSkyId,
        originEntityId,
        destinationEntityId,
        departure,
        returnDate
      );
  
      const updatedResults = {
        origin: originData[1],
        destination: destinationData[1],
        flights,
      };
  
      setResults(updatedResults);
      console.log(updatedResults);
    } catch (error) {
      console.error('Error fetching flights:', error);
      setError('Could not fetch flight data.');
    }
  };

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
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
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
              value={from}
              onChange={(e) => 
                setFrom(e.target.value)
              }
            />

            <input 
              className="hero__form--input hero__form--input2" 
              type='text'  
              placeholder='Where to?'
              value={to}
              onChange={(e) => 
                setTo(e.target.value)
              }
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
              value={departure}
              onChange={(e) => 
                setDeparture(e.target.value)
              }
            />

            <input  
              className="hero__cont--input  hero__cont--input2" 
              type='date'  
              placeholder='Return'
              value={returnDate}
              onChange={(e) => 
                setReturnDate(e.target.value)
              }
            />
          </div>

          <button 
            className='button button--explore'
            type='submit'
            disabled={!from || !to || !departure}
            onClick={handleSearch}
          >
            <SearchIcon/>
            Explore
          </button>
        </form>
      </div>

      {results && 
        <FlightsList 
          origin={setResults.origin}
          destination={setResults.destination}
          flights={setResults.flights}
        />}
    </>
  )
}
import './Flight.scss';
import { useState, useEffect } from 'react';
import { ClipLoader } from "react-spinners";
import { Link } from 'react-router-dom';

export default function Flight({ origin, flights, destination}) { 
  const [loading, setLoading] = useState(false);
  // console.log("Origin:", JSON.stringify(origin, null, 2));
  // console.log("Destination:", JSON.stringify(destination, null, 2));
  // console.log("Flights:", JSON.stringify(flights, null, 2));

  const isDataAvailable = origin?.presentation?.suggestionTitle &&
    destination?.presentation?.suggestionTitle &&
    flights?.itineraries;

  useEffect(() => {
    if (isDataAvailable) {
      setLoading(true); 
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isDataAvailable]);

  if (!origin && !destination && !flights) {
    return <p className='info'>Information will be displayed here<br/>🛫</p>;
  }

  // if (loading) {
  //   return (
  //     <div className="loading-container">
  //       <ClipLoader color="#123abc" loading={loading} size={50} />
  //       <p>Loading available flights...</p>
  //     </div>
  //   );
  // }

  if (!isDataAvailable) {
    return <p>No flights available. Please check your search criteria.</p>;
  }

  return (
    <div className="flight">
      <h3 className='flight__local'>From: {origin.presentation.suggestionTitle}</h3>
      <h3 className='flight__local flight__local--dest'>To: {destination.presentation.suggestionTitle}</h3>
      
      <h5 className='flight__local flight__local--ava'>Available Flights:</h5>

      <ul className='flight__list'>
        {flights.itineraries.map((itinerary, index) => {
          const leg = itinerary.legs[0];
          const { departure, arrival } = leg;
          const formattedDeparture = new Date(departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const formattedArrival = new Date(arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return (
            <Link
              key={itinerary.id}
              to={`/flight/${itinerary.id}`}
              state={{ itinerary, origin, destination }}
            >
              <li 
              key={index} 
              className='flight__list--item'
              >
                <p className='flight__list--num'>Flight {index + 1}</p>

                <div className='flight__list--left'> 
                  <p className='flight__list--txt'>Departure: {formattedDeparture}</p>
                  <p className='flight__list--txt'>Arrival: {formattedArrival}</p>
                  <p className='flight__list--txt'>Duration: {Math.floor(leg.durationInMinutes / 60)}h {leg.durationInMinutes % 60}m</p>
                </div>

                <div className='flight__list--right'>
                  <p className='flight__list--txt'>Price: {itinerary.price.formatted}</p>
                  <p className='flight__list--txt'>Airline: {leg.carriers.marketing[0]?.name || 'N/A'}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
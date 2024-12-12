import './Flight.scss';
import { useState, useEffect } from 'react';
import { ClipLoader } from "react-spinners";

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
    return <p>Information will be displayed here</p>;
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
      <h3>From: {origin.presentation.suggestionTitle}</h3>
      <h3>To: {destination.presentation.suggestionTitle}</h3>
      
      <h5>Available Flights:</h5>
      <ul>
        {flights.itineraries.map((itinerary, index) => {
          const leg = itinerary.legs[0];
          const { departure, arrival } = leg;
          const formattedDeparture = new Date(departure).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const formattedArrival = new Date(arrival).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          return (
            <li key={index} className="flight-item">
              <p><strong>Flight {index + 1}</strong></p>
              <p>Departure: {formattedDeparture}</p>
              <p>Arrival: {formattedArrival}</p>
              <p>Duration: {Math.floor(leg.durationInMinutes / 60)}h {leg.durationInMinutes % 60}m</p>
              <p>Price: {itinerary.price.formatted}</p>
              <p>Airline: {leg.carriers.marketing[0]?.name || 'N/A'}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
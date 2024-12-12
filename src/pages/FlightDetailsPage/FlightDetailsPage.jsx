import { useParams, useLocation } from 'react-router-dom';
import './FlightDetailsPage.scss';

export default function FlightDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const { itinerary } = location.state || {};

  if (!itinerary) {
    return <p>Flight details not available. Please go back and select a flight.</p>;
  }

  const leg = itinerary.legs[0];
  const marketingCarrier = leg.carriers.marketing[0]?.name || 'N/A';

  return (
    <>
      <article className='fl-detail'>
        <div className="fl-detail__title">
          <h2>FLIGHT <br/> {id}</h2>
          
          <div className="fl-detail__title--loc"> 
            <h3>
              Departure 🛫:{leg.origin.name}
            </h3>

            <h3>
              Arrival 🛬: {leg.destination.name}
            </h3>
          </div>
         
        </div>

        <div className='fl-detail__info'>
          <div className="fl-detail__info--airline">
            <h2>Airline: {marketingCarrier}</h2>

            <img
            className='fl-detail__info--logo'
              src={leg.carriers.marketing[0].logoUrl}
            />
          </div>
          
          <div className="fl-detail__info--left">
            <div className="fl-detail__time">
              <h4>DEPARTURE TIME:</h4>
            </div>
            <div className="fl-detail__time--txt">
              <p>{new Date(leg.departure).toLocaleString()}</p>
            </div>

            <div className="fl-detail__time">
              <h4>ARRIVAL TIME:</h4>
            </div>
            <div className="fl-detail__time--txt">
              <p>{new Date(leg.arrival).toLocaleString()}</p>
            </div>
          </div>

          <div className="fl-detail__info--right">
            <div className="fl-detail__label">
              <h4>DURATION:</h4>
            </div>
            <div className="fl-detail__time">
              <p>{Math.floor(leg.durationInMinutes / 60)}h {leg.durationInMinutes % 60}m</p>
            </div>

            <div className="fl-detail__label">
              <h4>PRICE:</h4>
            </div>
            <div className="fl-detail__time">
              <p>{itinerary.price.formatted}</p>
            </div>
          </div>
        </div>
        
      </article>
    </>
  )
}
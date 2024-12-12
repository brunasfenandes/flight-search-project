import Flight from '../Flight/Flight';
import './FlightsList.scss';

export default function FlightsList({ origin, flights, destination}) {
  // console.log("Origin:", JSON.stringify(origin, null, 2));
  // console.log("Destination:", JSON.stringify(destination, null, 2));
  // console.log("Flights:", JSON.stringify(flights, null, 2));

  return (
    <div className='fts-list'>
      <h2 className='fts-list__title'>FLIGHTS</h2>

        <Flight
          origin={origin}
          flights={flights}
          destination={destination}
        />
    </div>
  );
}
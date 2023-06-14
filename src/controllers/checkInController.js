import { assignSeats } from '../utils/assingSeats.js';
import { getFlightData } from '../utils/getData/getFlightData.js';

export const checkIn = async (req, res) => {
    const { id } = req.params;
    const flightId = parseInt(id);
   
    try {
     if (flightId !== 1 && flightId !== 2 && flightId !== 3 && flightId !== 4) {
      throw new Error('flight not found');
     }
   
     const passengers = await assignSeats(flightId);
     const {
      flight_id,
      takeoff_date_time,
      takeoff_airport,
      landing_date_time,
      landing_airport,
      airplane_id,
     } = await getFlightData(flightId);
   
     return res.json({
      code: 200,
      data: {
       flightId: flight_id,
       takeoffDateTime: takeoff_date_time,
       takeoffAirport: takeoff_airport,
       landingDateTime: landing_date_time,
       landingAirport: landing_airport,
       airplaneId: airplane_id,
       passengers: passengers,
      },
     });
    } catch (error) {
     console.error(error);
     if (error.message === 'flight not found') {
      return res.status(404).json({
       code: 404,
       data: {},
      });
     }
     return res.status(400).json({
      code: 400,
      errors: 'could not connect to db',
     });
    }
   };
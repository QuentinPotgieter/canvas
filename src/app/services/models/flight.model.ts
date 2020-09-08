import { Booking } from './booking.model';

export class FlightBooking extends Booking {
  public departureDate: string;
  public returnDate: string;
  public fromDestination: string;

  constructor(
    departureDate: string,
    returnDate: string,
    fromDestination: string,
    adults: number,
    children: number,
    infants: number,
    destination: string
  ) {
    super(adults, children, infants, destination);
    this.adults, this.children, this.infants, this.destination;
    this.departureDate = departureDate;
    this.returnDate = returnDate;
    this.fromDestination = fromDestination;
  }
}

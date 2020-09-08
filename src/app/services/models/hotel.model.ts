import { Booking } from './booking.model';

export class HotelBooking extends Booking {
  public checkinDate: string;
  public checkoutDate: string;

  constructor(
    checkinDate: string,
    checkoutDate: string,
    adults: number,
    children: number,
    infants: number,
    destination: string
  ) {
    super(adults, children, infants, destination);
    this.adults, this.children, this.infants, this.destination;
    this.checkinDate = checkinDate;
    this.checkoutDate = checkoutDate;
  }
}

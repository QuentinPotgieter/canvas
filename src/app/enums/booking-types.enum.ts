export enum BookingTypes {
  Flight,
  Hotel,
  FlightAndHotel,
  Holiday,
}
export const BookingTypeLabel = new Map<number, string>([
  [BookingTypes.Flight, 'Flight'],
  [BookingTypes.Hotel, 'Hotel'],
  [BookingTypes.FlightAndHotel, 'Flight And Hotel'],
  [BookingTypes.Holiday, 'Holiday'],
]);

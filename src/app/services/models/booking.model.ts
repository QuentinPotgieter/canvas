export class Booking {
  public adults: number;
  public children?: number;
  public infants?: number;
  public destination: string;

  constructor(
    adults: number,
    children: number,
    infants: number,
    destination: string
  ) {
    this.adults = adults;
    this.children = children;
    this.infants = infants;
    this.destination = destination;
  }
}

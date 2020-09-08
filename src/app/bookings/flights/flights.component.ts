import { Component, OnInit } from '@angular/core';
import { BookingTypes } from '../../enums/booking-types.enum';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['../searchform/searchform.component.scss'],
})
export class FlightsComponent implements OnInit {
  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.setForm(BookingTypes.Flight);
  }
}

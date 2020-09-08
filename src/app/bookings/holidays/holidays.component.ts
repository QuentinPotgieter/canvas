import { Component, OnInit } from '@angular/core';
import { BookingTypes } from '../../enums/booking-types.enum';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['../searchform/searchform.component.scss'],
})
export class HolidaysComponent implements OnInit {
  constructor(private shared: SharedService) {}

  ngOnInit(): void {
    this.shared.setForm(BookingTypes.Holiday);
  }
}

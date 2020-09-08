import { Component, OnInit } from '@angular/core';
import { Shared } from '../../services/interfaces/shared';
import { Observable } from 'rxjs';
import { SharedService } from '../../services/shared.service';
import {
  IconDefinition,
  faGift,
  faHotel,
  faPlane,
} from '@fortawesome/free-solid-svg-icons';
import { BookingTypes } from '../../enums/booking-types.enum';

interface HeaderLinks {
  title: string;
  formID: number;
  icon?: IconDefinition;
  onSale: boolean;
}

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.scss'],
})
export class SearchformComponent implements OnInit {
  shared$: Observable<Shared>;
  bookingtype = BookingTypes.Flight;
  activeForm = 0;

  public formTabs: HeaderLinks[] = [
    { title: 'Flights', icon: faPlane, formID: 0, onSale: false },
    { title: 'Hotels', icon: faHotel, formID: 1, onSale: false },
    { title: 'Flights + Hotels', formID: 2, onSale: true },
    { title: 'Holidays', icon: faGift, formID: 3, onSale: false },
  ];
  constructor(private shared: SharedService) {
    this.shared$ = shared.getState();
  }
  ngOnInit(): void {}

  setForm(id: number) {
    this.shared.setForm(id);
    this.activeForm = id;
  }
}

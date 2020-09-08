import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Shared } from '../../services/interfaces/shared';
import { Observable } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  shared$: Observable<Shared>;

  minDate: string = new Date().toISOString().split('T')[0];
  returnDate: string;
  tourismType: string = 'Domestic';
  fromPlaceholder: string = 'Eg. Melbourne, Australia';
  toPlaceholder: string = 'Eg. New York, United States';
  advancedSearch: boolean = false;

  profileForm = this.fb.group({
    destination: this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
    }),
    dates: this.fb.group({
      departure: ['', Validators.required],
      return: ['', Validators.required],
      adults: ['', Validators.required],
    }),
    hotel: this.fb.group({
      checkin: [''],
      checkout: [''],
      adults: [''],
    }),
    advanced: this.fb.group({
      children: [''],
      infants: [''],
    }),
  });

  constructor(private shared: SharedService, private fb: FormBuilder) {
    this.shared$ = shared.getState();
  }

  ngOnInit(): void {}

  onTourismType(type) {
    this.tourismType = type;
    if (this.tourismType == 'Domestic') {
      this.fromPlaceholder = 'Eg. Melbourne, Australia';
      this.toPlaceholder = 'Eg. New York, United States';
    } else {
      this.fromPlaceholder = 'Eg. Johannesburg, South Africa';
      this.toPlaceholder = 'Eg. Cape Town, South Africa';
    }
  }
  onSubmit() {}
}

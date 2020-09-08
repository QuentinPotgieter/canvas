import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { getFormName } from './../../pipes/int-to-string.pipe';
import { AppBadgeColorDirective } from './../../directives/badge-color.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BookingComponent } from '../booking/booking.component';
import { SearchformComponent } from './searchform.component';
import { FlightsComponent } from '../flights/flights.component';
import { HolidaysComponent } from '../holidays/holidays.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    BookingComponent,
    SearchformComponent,
    FlightsComponent,
    HolidaysComponent,
    HotelsComponent,
    getFormName,
    AppBadgeColorDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    SearchformComponent,
    FlightsComponent,
    HolidaysComponent,
    HotelsComponent,
  ],
})
export class SearchformModule {}

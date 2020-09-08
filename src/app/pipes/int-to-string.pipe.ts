import { Pipe, PipeTransform } from '@angular/core';
import { BookingTypeLabel } from './../enums/booking-types.enum';

@Pipe({ name: 'getFormName' })
export class getFormName implements PipeTransform {
  transform(value: string, before: string, after: string): string {
    let label = BookingTypeLabel.get(parseInt(value));
    return label;
  }
}

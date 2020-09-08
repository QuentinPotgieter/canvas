import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SearchformModule } from '../bookings/searchform/searchform.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SearchformModule],
  exports: [MainComponent],
})
export class MainModule {}

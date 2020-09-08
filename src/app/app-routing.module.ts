import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FaqsComponent } from './content/faqs/faqs.component';
import { ContactComponent } from './content/contact/contact.component';
import { BlogComponent } from './blog/blog/blog.component';
import { MainComponent } from './main/main.component';
import { FlightsComponent } from './bookings/flights/flights.component';
import { HotelsComponent } from './bookings/hotels/hotels.component';
import { HolidaysComponent } from './bookings/holidays/holidays.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'holidays', component: HolidaysComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

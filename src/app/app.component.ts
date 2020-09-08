import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('backgroundDiv', [
      state(
        'x',
        style({
          'background-image': 'url(./assets/building.jpg)',
        })
      ),
      state(
        'y',
        style({
          'background-image': 'url(./assets/tower.jpg)',
        })
      ),
      state(
        'z',
        style({
          'background-image': 'url(./assets/city.jpg)',
        })
      ),
      transition('x <=> y', animate(2000)),
      transition('y <=> z', animate(2000)),
      transition('z <=> x', animate(2000)),
    ]),
  ],
})
export class AppComponent implements OnInit {
  state = 'x';
  constructor() {}
  ngOnInit(): void {
    // Background image transition
    let that = this;
    setInterval(function () {
      that.state == 'x'
        ? (that.state = 'y')
        : that.state == 'y'
        ? (that.state = 'z')
        : (that.state = 'x');
    }, 3000);
  }
}

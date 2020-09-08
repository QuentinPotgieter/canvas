import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  IconDefinition,
  faPhoneAlt,
  faEnvelope,
  faPencilAlt,
  faGift,
  faHotel,
  faPlane,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

interface HeaderLinks {
  title: string;
  link: string;
  icon: IconDefinition;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  public headerLinks: HeaderLinks[] = [
    { title: 'Home', icon: faHome, link: '/' },
    { title: 'Flights', icon: faPlane, link: '/flights' },
    { title: 'Hotels', icon: faHotel, link: '/hotels' },
    { title: 'Holidays', icon: faGift, link: '/holidays' },
    { title: 'Blog', icon: faPencilAlt, link: '/blog' },
    { title: '1800 105 2541', icon: faPhoneAlt, link: '#' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

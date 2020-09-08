import { Component, OnInit } from '@angular/core';
import {
  faCoffee,
  IconDefinition,
  faPhoneAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

interface PreHeaderLinks {
  isSelect: boolean;
  title?: string;
  link?: string;
  icon?: IconDefinition;
  selectOptions?: string[];
}

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.scss'],
})
export class PreHeaderComponent implements OnInit {
  selectedCurrency: string = 'usd';
  public preLinks: PreHeaderLinks[] = [
    { isSelect: false, title: 'Home', link: '/' },
    { isSelect: false, title: 'Faqs', link: '/faqs' },
    { isSelect: false, title: 'Contact', link: '/contact' },
    {
      isSelect: true,
      title: this.selectedCurrency,
      selectOptions: ['usd', 'zar', 'eur'],
    },
  ];
  public socialLinks: PreHeaderLinks[] = [
    { isSelect: false, icon: faEnvelope, link: '#' },
    { isSelect: false, icon: faPhoneAlt, link: '#' },
    { isSelect: false, icon: faInstagram, link: '#' },
    { isSelect: false, icon: faPinterestP, link: '#' },
    { isSelect: false, icon: faTwitter, link: '#' },
    { isSelect: false, icon: faFacebookF, link: '#' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

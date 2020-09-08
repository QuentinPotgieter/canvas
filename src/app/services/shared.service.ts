import { Injectable } from '@angular/core';
import { Store } from './store.class';
import { Shared } from './interfaces/shared';

@Injectable({ providedIn: 'root' })
export class SharedService extends Store<Shared> {
  constructor() {
    super({ formid: 0 });
  }

  setForm(formid: number) {
    const newState = { formid };
    this.setState(newState);
    // console.log(newState);
  }
}

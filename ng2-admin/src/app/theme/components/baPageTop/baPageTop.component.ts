import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';

import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = true;

  constructor() {
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}

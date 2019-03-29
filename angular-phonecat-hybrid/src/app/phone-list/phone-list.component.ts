import { Component, Inject } from '@angular/core';
// import { PhoneService } from '../core/phone.service';

// import { PhoneService } from '../../app-ajs/core/phone';
import { PHONE_SERVICE } from '../upgrade/upgraded-providers';

@Component({
  selector: 'app-phone-list',
  // template: ``,
  template: `
    <div>Phone List</div>
    <div *ngFor="let item of phones">
      /<span>{{ item.name }}</span>
    </div>
  `,
})
export class PhoneListComponent {
  phones: any;

  constructor(@Inject(PHONE_SERVICE) private phoneService: any) {
    this.phones = this.phoneService.query();
  }

  // constructor(private phoneService: PhoneService) {
  //   this.phones = this.phoneService.query();
  // }
}

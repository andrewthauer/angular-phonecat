import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <h2>
      <ng-content></ng-content>
    </h2>
  `,
})
export class TitleComponent {}

import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'ui-view',
})
export class UiViewDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ui-view', elementRef, injector);
  }
}

@Directive({
  selector: 'phone-list',
})
export class PhoneListDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('phone-list', elementRef, injector);
  }
}

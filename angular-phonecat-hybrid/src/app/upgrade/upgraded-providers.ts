import { InjectionToken } from '@angular/core';

import { PhoneService } from '../../app-ajs/core/phone/phone.service';

export const PHONE_SERVICE = new InjectionToken<PhoneService>('PHONE_SERVICE');

export function phoneServiceFactory(i: any) {
  return i.get('Phone');
}

export const phoneServiceProvider = {
  provide: PHONE_SERVICE,
  useFactory: phoneServiceFactory,
  deps: ['$injector'],
};

import * as angular from 'angular';

import { createPhoneService } from './phone.service';

angular
  .module('core.phone', ['ngResource'])
  .factory('Phone', createPhoneService);

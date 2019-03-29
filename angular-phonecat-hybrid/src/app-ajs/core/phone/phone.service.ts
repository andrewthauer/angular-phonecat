export class PhoneService {
  constructor($resource) {
    return $resource(
      'phones/:phoneId.json',
      {},
      {
        query: {
          method: 'GET',
          params: { phoneId: 'phones' },
          isArray: true,
        },
      },
    );
  }
}

export const createPhoneService = [
  '$resource',
  ($resource) => new PhoneService($resource),
];

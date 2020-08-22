import * as fromRegistration from './registration.actions';

describe('loadRegistrations', () => {
  it('should return an action', () => {
    expect(fromRegistration.loadRegistrations().type).toBe('[Registration] Load Registrations');
  });
});

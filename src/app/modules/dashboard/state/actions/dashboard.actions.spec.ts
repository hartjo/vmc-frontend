import * as fromDashboard from './dashboard.actions';

describe('loadDashboards', () => {
  it('should return an action', () => {
    expect(fromDashboard.loadDashboards().type).toBe('[Dashboard] Load Dashboards');
  });
});

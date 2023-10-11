import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminAccessGuard } from './admin-access.guard';

describe('adminAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

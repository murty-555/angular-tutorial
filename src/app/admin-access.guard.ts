import { CanActivateFn } from '@angular/router';

export const adminAccessGuard: CanActivateFn = (route, state) => {
  return true;
};

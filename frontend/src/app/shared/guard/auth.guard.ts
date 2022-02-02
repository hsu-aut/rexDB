import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
        private router: Router,
        private authService: AuthService) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		const currentUser = this.authService.currentUserValue;
		console.log("trying to authenticate");
		console.log(currentUser);


		// logged in -> return true
		if (currentUser) {
			// logged in -> return true
			return true;
		}

		// if not -> navigate to login
		this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
		return false;
	}
}

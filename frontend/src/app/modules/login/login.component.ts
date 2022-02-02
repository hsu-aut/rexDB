import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { routerTransition } from '../../router.animations';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    returnUrl: string;
	loginForm = this.fb.group({
		username: ['', Validators.required],
		password: ['', Validators.required]
	})

	constructor(
		private fb: FormBuilder,
        private route: ActivatedRoute,
		private authService: AuthService,
        private router: Router) {}



	ngOnInit(): void {
		// reset login status
		this.authService.logout();

		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
	}

	onSubmit() {
		const formControls = this.loginForm.controls;
		console.log(formControls);


		// stop here if form is invalid
		if (this.loginForm.invalid) {
			return;
		}

		this.authService.login(formControls.username.value, formControls.password.value)
			.pipe(first())
			.subscribe(data => {
				console.log("data");
				console.log(data);

				// this.error = '';
				this.router.navigate([this.returnUrl]);
			}, error => {
				console.log(error);

				// this.error = error;
			});
	}
}

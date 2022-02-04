import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	// TODO: Type with user instead of any
	private currentUserSubject: BehaviorSubject<any>;
	public currentUser: Observable<any>;

	constructor(private http: HttpClient) {
		this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
		this.currentUser = this.currentUserSubject.asObservable();
	}

	login(username: string, password: string) {
		// this.http.get('asd').pipe();
		return this.http.post<any>('/api/auth/login', { username, password }).pipe(map(user => {
			console.log("from auth backend");
			console.log(user);


			if (user && user.accessToken) {
				localStorage.setItem('currentUser', JSON.stringify(user));
				localStorage.getItem("currentUser");
				this.currentUserSubject.next(user);
			}
			return user;
		}));
	}

	logout() {
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
	}

	get currentUserValue(): any {
		return this.currentUserSubject.value;
	}
}

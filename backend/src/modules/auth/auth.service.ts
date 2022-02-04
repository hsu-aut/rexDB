import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
	constructor(
		private usersService: UserService,
		private jwtService: JwtService) {}

	async validateUser(username: string, password: string): Promise<any> {
		const user = await this.usersService.findOne(username);
		if (user && user.password === password) {
			// pull out the password, just return the rest
			const { password, ...rest } = user;
			return rest;
		}
		return null;
	}

	async login(user: any) {
		// create data that will be stored in JWT
		const payload = {name: user.username, sub: user.id};

		return {
			accessToken: this.jwtService.sign(payload)
		};
	}
}
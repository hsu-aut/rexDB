import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

	constructor() {
		super({
			secretOrKey: "SECRET",
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
		});
	}

	// No real validation, already happens in the constructor's super() call
	async validate(payload: any) {
		// If there is more user info that should be checked, check it here 
		return {
			id: payload.sub,
			name: payload.name
		};
	}

}
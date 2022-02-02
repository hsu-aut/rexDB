import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../modules/auth/auth.service';
import { LocalAuthGuard } from '../../modules/auth/local-auth.guard';

@Controller('auth')
export class LoginController {
	
	constructor(private authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req): Promise<any> {
		return this.authService.login(req.user);
	}
}

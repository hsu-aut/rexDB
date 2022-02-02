import { Module } from '@nestjs/common';
import { AuthModule } from '../../modules/auth/auth.module';
import { LoginController } from './login.controller';

@Module({
	imports: [AuthModule],
	controllers: [LoginController]
})
export class LoginModule {}

import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * This is just a class which is used to avoid magic strings in the code base
 */
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

}
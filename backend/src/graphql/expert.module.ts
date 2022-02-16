import { Module } from "@nestjs/common";
import { ExpertResolver } from "./expert.resolver";

@Module({
	providers: [ExpertResolver],
})
export class ExpertModule {}
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LocalizedDatePipe } from './localized-date.pipe';

@NgModule({
	imports: [TranslateModule],
	providers: [DatePipe, LocalizedDatePipe],
	declarations: [LocalizedDatePipe],
	exports:[LocalizedDatePipe]
})
export class SharedPipesModule {}

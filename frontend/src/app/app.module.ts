import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';

import localeDe  from "@angular/common/locales/de";     // Import and register your locales here
import { APOLLO_OPTIONS } from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { FormsModule } from '@angular/forms';
registerLocaleData(localeDe);

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
        FormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		LanguageTranslationModule,
		AppRoutingModule,
	],
	declarations: [AppComponent],
    providers: [AuthGuard,
        //graphQL-Angular example server:
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                  cache: new InMemoryCache(),
                  link: httpLink.create({
                    uri: 'https://48p1r2roz4.sse.codesandbox.io',
                  }),
                };
              },
              deps: [HttpLink],
            },],
	bootstrap: [AppComponent]
})
export class AppModule {}

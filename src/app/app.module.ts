import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTE } from 'src/app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AmexioMenuCEComponent1 } from './menu/menu.component';

import { AmexioWidgetModule } from 'amexio-ng-extensions'; // Import Amexio library

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AmexioMenuCEComponent1
  ],
  imports: [
    BrowserModule, AmexioWidgetModule, HttpClientModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

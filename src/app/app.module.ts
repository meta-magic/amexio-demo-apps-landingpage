import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { APP_ROUTE } from 'src/app/app.routes';
import { HttpClientModule } from '@angular/common/http';
import { AmexioChartD3Module } from 'amexio-chart-d3';
import { ChartD3Demo } from '../app/chartd3/chard3.demo';
import { AccessibilityDemo } from './accessibility/accessibility.demo';
import { KeyFeaturesComponent } from './concept/keyfeatures.component';
import { ThemeComponent } from './theme/theme.component';
import { GettingStatedDemo } from './gettingstarted/gettingstarted';
import { AmexioWidgetModule, AmexioThemeSwitcherComponent, AmexioThemeSwitcherService } from 'amexio-ng-extensions'; // Import Amexio library
import { ConceptPage } from './concept/concept.component';
import {PrismComponent} from './shared.module';

import { HTTPService } from './service/http.service';
import { ThemeServiceService } from './theme-service.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ChartD3Demo,
    AccessibilityDemo,
    ConceptPage,
    KeyFeaturesComponent,
    ThemeComponent,
    AmexioThemeSwitcherComponent,
    GettingStatedDemo,
    PrismComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule, AmexioWidgetModule, HttpClientModule, AmexioChartD3Module,
    RouterModule.forRoot(APP_ROUTE, { useHash: true })
  ],
  providers: [CookieService, HTTPService, ThemeServiceService, AmexioThemeSwitcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { Routes } from '@angular/router';
import { LandingPageComponent } from 'src/app/landing-page/landing-page.component';
export const APP_ROUTE: Routes = [
    {
        path: '', redirectTo: 'landingPage-app', pathMatch: 'full',
    },
    {
        path: 'landingPage-app', component: LandingPageComponent,
    }
];

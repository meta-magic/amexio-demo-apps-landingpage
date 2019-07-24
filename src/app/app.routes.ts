

import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ChartD3Demo } from './chartd3/chard3.demo';
import { AccessibilityDemo } from './accessibility/accessibility.demo';
import { ConceptPage } from './concept/concept.component';
import { ThemeComponent } from './theme/theme.component';
import { GettingStatedDemo } from './gettingstarted/gettingstarted';
export const APP_ROUTE: Routes = [
    {
        path: '', redirectTo: 'landingPage-app', pathMatch: 'full',
    },
    {
        path: 'landingPage-app', component: LandingPageComponent
    },
    {
        path: 'd3-charts', component: ChartD3Demo,
    },
    {
        //AccessibilityDemoModule
        path: 'accessibility', component: AccessibilityDemo,
    },
    {
        path: 'getting-started', component: GettingStatedDemo,
    },
    {
        path: 'concept', component: ConceptPage,
    },
    {
        path: 'theme', component: ThemeComponent,
    },
];

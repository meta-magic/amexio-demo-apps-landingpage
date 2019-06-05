import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AmexioGridLayoutService, GridConfig, GridConstants } from 'amexio-ng-extensions';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  topMenuData: any;
  amexiotechmenus: any;
  DEMO_FIRST_URL = 'https://meta-magic.github.io/amexio-ce-demo/#/home/dashboard?type=1';
  DEMO_SEC_URL = 'https://meta-magic.github.io/amexio-ce-demo/#/home/dashboard?type=2';
  DEMO_TECH_M_URL = 'https://demo.amexio.org/ee/tecmflix/index.html#/app';
  DEMO_THREE_URL = ' https://cedemo.amexio.org/#/home/dashboard';

  DEMO_FOUR_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/scrollable-viewport';
  DEMO_FIVE_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/viewport';
  DEMO_SIX_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/video-viewport';

  //

  DEMO_SEVEN_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/menu-one';
  DEMO_EIGHT_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/menu-two';
  DEMO_NINE_URL = ' https://meta-magic.github.io/viewport-Demo/#/home/menu-three';

  DEMO_SHOPPING_URL = 'https://demo.amexio.org/se/shoppingportal/#/home';
  DEMO_POLICY_URL = 'https://demo.amexio.org/se/insuranceportal/#/home';
  DEMO_ELECTION_URL = 'https://demo.amexio.org/se/us-election/';
  tempData: any;
  navmenus: any;
  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;
  facebookLoginData: any;
  navBarData: any;
  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this.createLayouts();
    // Create the Layouts
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);


  }

  ngOnInit() {
    this.tempData = [
      {
        label: 'API'

      },
      {
        label: 'GITHUB'

      },
      {
        label: 'NPM STATS'

      },
      {
        label: 'SUPPORT'

      },
      {
        label: 'ROAD MAP'

      }

    ];
  }


  createLayouts() {
    this.gridDesktop = new GridConfig('page1', GridConstants.Desktop)
      .addlayout(['gridDemo1', 'gridDemo1', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
      .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo2', 'gridDemo2', 'gridDemo3', 'gridDemo3']);
    // .addlayout(['gridDemo1', 'gridDemo2', 'gridDemo3']);
    this.gridTablet = new GridConfig('page1', GridConstants.Tablet)
      .addlayout(['gridDemo1', 'gridDemo1', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
      .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2'])
      .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3']);

    // .addlayout(['gridDemo1', 'gridDemo2', 'gridDemo3'])
    // .addlayout(['gridDemo1', 'gridDemo2', 'gridDemo3'])
    // .addlayout(['gridDemo1', 'gridDemo2', 'gridDemo3']);
    this.gridMobile = new GridConfig('page1', GridConstants.Mobile)
      .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1'])
      .addlayout(['gridLabel', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
      .addlayout(['gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2'])
      .addlayout(['gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3']);


    // .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo1'])
    // .addlayout(['gridDemo2', 'gridDemo2', 'gridDemo2'])
    // .addlayout(['gridDemo3', 'gridDemo3', 'gridDemo3']);
  }

  onLoginClick(data: any) {
    this.facebookLoginData = data;
  }



  onDemoTechMClick() {
    window.open(this.DEMO_TECH_M_URL);
  }
  onDemoFirstClick() {
    window.open(this.DEMO_FIRST_URL);
  }
  onDemoSecondClick() {
    window.open(this.DEMO_SEC_URL);
  }
  onDemoThreeClick() {
    window.open(this.DEMO_THREE_URL);
  }

  onViewportDemoFirstClick() {
    window.open(this.DEMO_FOUR_URL);
  }
  onViewportDemoSecondClick() {
    window.open(this.DEMO_FIVE_URL);
  }

  onViewportDemoThreeClick() {
    window.open(this.DEMO_SIX_URL);
  }


  onMenuDemoFirstClick() {
    window.open(this.DEMO_SEVEN_URL);
  }
  onMenuDemoSecondClick() {
    window.open(this.DEMO_EIGHT_URL);
  }

  onMenuDemoThreeClick() {
    window.open(this.DEMO_NINE_URL);
  }

  onPolicyDemoClick() {
    window.open(this.DEMO_POLICY_URL);
  }
  onShoppingDemoClick() {
    window.open(this.DEMO_SHOPPING_URL);

  }
  onElectionDemoClick() {
    window.open(this.DEMO_ELECTION_URL);


  }
}

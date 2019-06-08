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

  DEMO_THEME_URL = 'https://demo.amexio.org/se/v5.12/index.html#/home';
  DEMO_VIRTUAL_URL = 'https://meta-magic.github.io/amexio-virtualscroll-demo/#/sc';
  tempData: any;
  navmenus: any;
  gridDesktop: GridConfig;
  gridTablet: GridConfig;
  gridMobile: GridConfig;

  gridDesktopPage2: GridConfig;
  gridTabletPage2: GridConfig;
  gridMobilePage2: GridConfig;

  gridDesktopPage3: GridConfig;
  gridTabletPage3: GridConfig;
  gridMobilePage3: GridConfig;

  gridDesktopPage4: GridConfig;
  gridTabletPage4: GridConfig;
  gridMobilePage4: GridConfig;

  gridDesktopPage5: GridConfig;
  gridTabletPage5: GridConfig;
  gridMobilePage5: GridConfig;

  gridDesktopPage6: GridConfig;
  gridTabletPage6: GridConfig;
  gridMobilePage6: GridConfig;

  facebookLoginData: any;
  navBarData: any;
  constructor(private http: HttpClient, private _gridlayoutService: AmexioGridLayoutService) {
    this.createLayouts();
    // Create the Layouts
    this._gridlayoutService.createLayout(this.gridDesktop);
    this._gridlayoutService.createLayout(this.gridTablet);
    this._gridlayoutService.createLayout(this.gridMobile);

    this._gridlayoutService.createLayout(this.gridDesktopPage2);
    this._gridlayoutService.createLayout(this.gridTabletPage2);
    this._gridlayoutService.createLayout(this.gridMobilePage2);

    this._gridlayoutService.createLayout(this.gridDesktopPage3);
    this._gridlayoutService.createLayout(this.gridTabletPage3);
    this._gridlayoutService.createLayout(this.gridMobilePage3);

    this._gridlayoutService.createLayout(this.gridDesktopPage4);
    this._gridlayoutService.createLayout(this.gridTabletPage4);
    this._gridlayoutService.createLayout(this.gridMobilePage4);

    this._gridlayoutService.createLayout(this.gridDesktopPage5);
    this._gridlayoutService.createLayout(this.gridTabletPage5);
    this._gridlayoutService.createLayout(this.gridMobilePage5);

    this._gridlayoutService.createLayout(this.gridDesktopPage6);
    this._gridlayoutService.createLayout(this.gridTabletPage6);
    this._gridlayoutService.createLayout(this.gridMobilePage6);
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
    // PAGE 1
    this.gridDesktop = new GridConfig('page1', GridConstants.Desktop)
      .addlayout(['gridDemo1', 'gridDemo1', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
      .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo2', 'gridDemo2', 'gridDemo3', 'gridDemo3']);

    this.gridTablet = new GridConfig('page1', GridConstants.Tablet)
      .addlayout(['gridDemo1', 'gridDemo1', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
      .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2'])
      .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3']);

    this.gridMobile = new GridConfig('page1', GridConstants.Mobile)
      .addlayout(['gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1', 'gridDemo1'])
      .addlayout(['gridLabel', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel', 'gridLabel'])
      .addlayout(['gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2', 'gridDemo2'])
      .addlayout(['gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3', 'gridDemo3']);


    // PAGE 2
    this.gridDesktopPage2 = new GridConfig('page2', GridConstants.Desktop)
      .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
      .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view2', 'gridpage2view2', 'gridpage2view3', 'gridpage2view3']);

    this.gridTabletPage2 = new GridConfig('page2', GridConstants.Tablet)
      .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
      .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2'])
      .addlayout(['gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3']);

    this.gridMobilePage2 = new GridConfig('page2', GridConstants.Mobile)
      .addlayout(['gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title', 'gridpage2title'])
      .addlayout(['gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1', 'gridpage2view1'])
      .addlayout(['gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2', 'gridpage2view2'])
      .addlayout(['gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3', 'gridpage2view3']);


    // PAGE 3
    this.gridDesktopPage3 = new GridConfig('page3', GridConstants.Desktop)
      .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
      .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu3', 'gridpage3menu3']);

    this.gridTabletPage3 = new GridConfig('page3', GridConstants.Tablet)
      .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
      .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2'])
      .addlayout(['gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3']);

    this.gridMobilePage3 = new GridConfig('page3', GridConstants.Mobile)
      .addlayout(['gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title', 'gridpage3title'])
      .addlayout(['gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1', 'gridpage3menu1'])
      .addlayout(['gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2', 'gridpage3menu2'])
      .addlayout(['gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3', 'gridpage3menu3']);


    // PAGE 4

    this.gridDesktopPage4 = new GridConfig('page4', GridConstants.Desktop)
      .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2']);

    this.gridTabletPage4 = new GridConfig('page4', GridConstants.Tablet)
      .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2'])

    this.gridMobilePage4 = new GridConfig('page4', GridConstants.Mobile)
      .addlayout(['gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1', 'gridpage4demo1'])
      .addlayout(['gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2', 'gridpage4demo2'])


    // PAGE 5

    this.gridDesktopPage5 = new GridConfig('page5', GridConstants.Desktop)
      .addlayout(['gridpage5title', 'gridpage5title', 'gridpage5title', 'gridpage5title'])
      .addlayout(['gridpage5app1', 'gridpage5app1', 'gridpage5app2', 'gridpage5app2'])

    this.gridTabletPage5 = new GridConfig('page5', GridConstants.Tablet)
      .addlayout(['gridpage5title', 'gridpage5title', 'gridpage5title', 'gridpage5title'])
      .addlayout(['gridpage5app1', 'gridpage5app1', 'gridpage5app2', 'gridpage5app2'])

    this.gridMobilePage5 = new GridConfig('page5', GridConstants.Mobile)
      .addlayout(['gridpage5title', 'gridpage5title', 'gridpage5title', 'gridpage5title'])
      .addlayout(['gridpage5app1', 'gridpage5app1', 'gridpage5app1', 'gridpage5app1'])
      .addlayout(['gridpage5app2', 'gridpage5app2', 'gridpage5app2', 'gridpage5app2'])

    // PAGE 6
    this.gridDesktopPage6 = new GridConfig('page6', GridConstants.Desktop)
      .addlayout(['gridpage6app1', 'gridpage6app1', 'gridpage6app2', 'gridpage6app2'])

    this.gridTabletPage6 = new GridConfig('page6', GridConstants.Tablet)
      .addlayout(['gridpage6app1', 'gridpage6app1', 'gridpage6app2', 'gridpage6app2'])

    this.gridMobilePage6 = new GridConfig('page6', GridConstants.Mobile)
      .addlayout(['gridpage6app1', 'gridpage6app1', 'gridpage6app1', 'gridpage6app1'])
      .addlayout(['gridpage6app2', 'gridpage6app2', 'gridpage6app2', 'gridpage6app2'])

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
  onAmexioDemoClick() {
    window.open(this.DEMO_THEME_URL);
  }
  onVirtualScrollDemoClick() {
    window.open(this.DEMO_VIRTUAL_URL);
  }
}

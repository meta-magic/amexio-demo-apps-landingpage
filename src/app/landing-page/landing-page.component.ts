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
  DEMO_FIRST_URL = 'https://eedemo.amexio.org/#/home/dashboard';
  DEMO_SEC_URL = 'https://eedemo.amexio.org/#/home/dashboardtwo';
  DEMO_TECH_M_URL = 'https://cedemo.amexio.org/tecmflix/';
  DEMO_THREE_URL = ' https://cedemo.amexio.org/#/home/dashboard';

  DEMO_FOUR_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-one';
  DEMO_FIVE_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-two';
  DEMO_SIX_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/viewport/viewport-three';

  //
  DEMO_SEVEN_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-one';
  DEMO_EIGHT_URL = 'https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-two';
  DEMO_NINE_URL = ' https://cedemo.amexio.org/amexio-ce-demo-app/index.html#/menu/menu-three';

  DEMO_SHOPPING_URL = 'https://sedemo.amexio.org/se/shoppingportal/#/home';
  DEMO_POLICY_URL = 'https://sedemo.amexio.org/se/insuranceportal/#/home';
  DEMO_ELECTION_URL = 'https://sedemo.amexio.org/se/us-election/';

  DEMO_THEME_URL = 'https://sedemo.amexio.org/se/v5.12/index.html#/home';
  DEMO_VIRTUAL_URL = 'https://cedemo.amexio.org/Virtual-Scroller/#/sc';
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
        label: 'API',
        "link": "https://api.amexio.org/"
      },
      {
        label: 'GITHUB',
        "link": "https://github.com/meta-magic/amexio.github.io"


      },
      {
        label: 'NPM STATS',
        "link": "https://www.npmstats.com/"

      },
      {
        label: 'SUPPORT',
        "link": "https://amexio.tech/support"

      },
      {
        label: 'ROAD MAP',
        "link": "https://amexio.tech/roadmap"

      }

    ];

    this.amexiotechmenus = [
      {
        "text": "Products",
        "icon": "fa fa-snowflake-o fa-fw",
        "submenus": [
          {
            "text": "Amexio API",
            "link": "https://amexio.tech/amexio-api"
          },
          {
            "text": "Amexio D3 Charts",
            "link": " https://amexio.tech/amexio-d3-charts"
          },
          {
            "text": "Amexio Canvas",
            "link": "https://amexio.tech/amexio-canvas"
          }, {
            "text": "Amexio Colors",
            "link": "https://amexio.tech/amexio-colors"
          }, {
            "text": "Amexio Plugins",
            "link": "https://amexio.tech/amexio-plugins-1"
          },
          {
            "text": "Amexio Demo Apps",
            "link": "http://demo.amexio.tech/"
          }
        ]
      },
      {
        "text": "Start Using",
        "icon": "fa fa-television fa-fw",
        "submenus": [
          {
            "text": "Roadmap",
            "link": "https://amexio.tech/roadmap"
          },
          {
            "text": "Support",
            "link": "https://amexio.tech/support"
          },
          {
            "text": "Pricing",
            "link": "https://amexio.tech/pricing"
          },
          {
            "text": "Quality-Assurance",
            "link": "https://amexio.tech/quality-assurance"
          },
          {
            "text": "Downloads",
            "link": "https://amexio.tech/download"
          },
          {
            "text": "License and Other Docs",
            "link": "https://amexio.tech/license-and-other-docs-1"
          },
          {
            "text": "Canvas Login (Beta)",
            "link": "https://canvas.amexio.org/"
          },
          {
            "text": "Subscribe ",
            "link": "https://canvas.amexio.org/#/user/signup"
          }
        ]
      },
      {
        "text": "Training",
        "icon": "fa fa-user fa-fw",
        "submenus": [
          {
            "text": "Component Example",
            "link": "http://demo.amexio.tech/"
          }, {
            "text": "Amexio Training",
            "link": "http://metaarivu.com/amexio-training"
          }]
      },
      {
        "text": "Case Studies",
        "icon": "fa fa-clone fa-fw",
        "submenus": [
          { "text": "Shopping Portal", "link": "https://demo.amexio.org/se/shoppingportal/#/home" },
          { "text": "US Election Results", "link": "https://demo.amexio.org/se/us-election/ " },
          { "text": "Insurance Portal", "link": "https://demo.amexio.org/se/insuranceportal/#/home" },
          { "text": "Movie Portal", "link": "https://demo.amexio.org/ee/" },
          { "text": "NpmStats", "link": "https://www.npmstats.com/" },
          { "text": "Creative Demo", "link": "https://cedemo.amexio.org/#/login" }
        ]
      },
      {
        "text": "Engage",
        "submenus": [
          {
            "text": "Events",
            "link": "https://metamagicglobal.com/events"
          }, {
            "text": "Forums",
            "link": "http://forum.metamagicglobal.com/"
          }, {
            "text": "Blogs",
            "link": "http://blog.metamagicglobal.com/"
          }, {
            "text": "Node Package Manager",
            "link": "https://www.npmjs.com/package/amexio-ng-extensions"
          }, {
            "text": "GitHub - Source Code",
            "link": "https://github.com/meta-magic/amexio.github.io"
          }
        ]
      },
      {
        "text": "About Us",
        "submenus": [
          {
            "text": "Contact",
            "link": "https://metamagicglobal.com/contact"
          }, {
            "text": "Company",
            "link": "http://www.metamagicglobal.com/company"
          }, {
            "text": "MetaMagic",
            "link": "https://www.metamagicglobal.com/"
          }
        ]
      }
    ];
  }


  externalLink(event: any) {
    if (event.data.node.link)
      //this.document.location.href=event.data.node.link;
      window.open(event.data.node.link, '_blank');
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

  onMenuClick(data: any) {
    if (data.link) {
      window.open(data.link, '_blank');
    }
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

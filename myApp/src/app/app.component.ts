import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar,
              private user        : UserService) 
  {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Últimas Recetas",
        url   : "/home/Ultimas"
      },
      {
        title : "Comidas",
        url   : "/home/Comidas"
      },
      {
        title : "Postres",
        url   : "/home/Postres"
      },
      {
        title : "Más Queridas",
        url   : "/home/Megusta"
      },
      {
        title : "Más Comentadas",
        url   : "/home/Comentadas"
      },
      {
        title : "Ajustes",
        url   : "/settings"
      },
      {
        title : "Cerrar Sesión",
        url   : "/logout",
        icon  : "contacts"
      },
    ]
  }
}
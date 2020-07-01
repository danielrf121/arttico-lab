import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Plugins, StatusBarStyle } from '@capacitor/core';

const { StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.configStatusBar();
      this.splashScreen.hide();
    });
  }

  /**
   * Configurar statusbar
   */
  private configStatusBar() {
    if (this.platform.is('capacitor')) {
      console.log('configStatusBar');
      if (this.platform.is('android')) {
        console.log('android');
        StatusBar.setStyle({ style: StatusBarStyle.Dark });
        StatusBar.setBackgroundColor({ color: '#09ACD6' });
      } else {
        console.log('ios');
        StatusBar.setStyle({ style: StatusBarStyle.Light });
      }
    }
  }
}

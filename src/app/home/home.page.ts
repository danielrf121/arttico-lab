import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';

const { StatusBar } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private platform: Platform,
    public router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.platform.is('capacitor')) {
      if (this.platform.is('android')) {
        console.log('android');
        StatusBar.setStyle({ style: StatusBarStyle.Dark });
        StatusBar.setBackgroundColor({ color: '#09ACD6' });
      }
    }
  }

  /**
   * Navegação do menu
   * 
   * @param url 
   */
  navTo(url: string) {
    this.router.navigate([url]);
  }
}

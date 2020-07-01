import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { labs } from '../data/labs';

const { StatusBar } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  /**
   * Controle de opacidade do titulo da pagina
   */
  opacityTitleContent = 1;
  opacityTitleToolbar = 0;

  /**
   * Lista de projetos
   */
  labs: any[] = labs;

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
        StatusBar.setBackgroundColor({ color: '#5765FD' });
      }
    }
  }

  /**
   * Efeito toolbar
   * 
   * @param event 
   */
  onScroll(event: any) {
    if (event.detail.scrollTop < 110) {
      let result = 1 - event.detail.scrollTop / 80;
      let result2 = 0 + event.detail.scrollTop / 80;

      if (result > 1) { result = 1; }
      if (result < 0) { result = 0; }
      if (result2 > 1) { result2 = 1; }
      if (result2 < 0) { result2 = 0; }

      this.opacityTitleContent = result;
      this.opacityTitleToolbar = result2;
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

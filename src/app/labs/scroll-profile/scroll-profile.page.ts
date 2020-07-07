import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-profile',
  templateUrl: './scroll-profile.page.html',
  styleUrls: ['./scroll-profile.page.scss'],
})
export class ScrollProfilePage implements OnInit {

  leftAvatar = 50;
  scaleAvatar = 1;
  topBanner = 0;
  fixedAvatar = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Efeito toolbar
   * 
   * @param event 
   */
  onScroll(event: any) {
    // Animação ocorre somente nesse range de scroll
    if (event.detail.scrollTop <= 136) {

      this.fixedAvatar = false;

      // Calculo left
      const leftPartial = 50 - (event.detail.scrollTop * 0.29);
      const leftFinal = (leftPartial < 12) ? 12 : leftPartial;
      this.leftAvatar = leftFinal;

      // Calculo scale
      const scalePartial = 1 - (event.detail.scrollTop * 0.01);
      const scaleFinal = (scalePartial < 0.6) ? 0.6 : scalePartial;
      this.scaleAvatar = scaleFinal;
    } else {
      this.fixedAvatar = true;
    }

    // Parallax do banner
    this.topBanner = 0 + (event.detail.scrollTop / 2);
  }
}

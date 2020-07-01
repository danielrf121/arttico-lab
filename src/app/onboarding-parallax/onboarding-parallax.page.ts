import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'ngx-swiper-wrapper';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-parallax',
  templateUrl: './onboarding-parallax.page.html',
  styleUrls: ['./onboarding-parallax.page.scss'],
})
export class OnboardingParallaxPage implements OnInit {

  @ViewChild(SwiperComponent) componentRef?: SwiperComponent;

  /**
   * Configuracao do slider
   */
  config = {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    }
  };

  /**
   * Valor de transicao do background
   */
  valueParallax = 0;

  constructor(
    public navController: NavController
  ) { }

  ngOnInit() {
  }

  /**
   * Progresso do slide
   * 
   * @param event 
   */
  onProgres(event: any) {
    this.valueParallax = (event * 200) * -1;
  }

  /**
   * Proximo slide
   */
  next() {
    this.componentRef.directiveRef.nextSlide();
  }

  /**
   * Pular slide no ultimo
   */
  skip() {
    this.navController.pop();
  }
}

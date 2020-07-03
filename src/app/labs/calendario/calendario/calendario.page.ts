import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CalendarPage } from '../modals/calendar/calendar.page';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  /**
   * Models de data
   */
  dateStartFormated: string;
  dateEndFormated: string;

  constructor(
    public navController: NavController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  back() {
    this.navController.pop();
  }

  async selectDate(type: string) {
    const modal = await this.modalController.create({
      component: CalendarPage,
      cssClass: 'modal-calendar'
    });

    modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      if (type === 'start') {
        this.dateStartFormated = data;
      }
      if (type === 'end') {
        this.dateEndFormated = data;
      }
    }
  }
}

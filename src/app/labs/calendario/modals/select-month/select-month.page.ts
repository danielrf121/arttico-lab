import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NAMES_MONTH } from '../../data';

@Component({
  selector: 'app-select-month',
  templateUrl: './select-month.page.html',
  styleUrls: ['./select-month.page.scss'],
})
export class SelectMonthPage implements OnInit {

  months: any[];

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.months = NAMES_MONTH;
  }

  dismiss() {
    this.modalController.dismiss();
  }

  select(month: any) {
    this.modalController.dismiss(month);
  }
}

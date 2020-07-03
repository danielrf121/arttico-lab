import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-year',
  templateUrl: './select-year.page.html',
  styleUrls: ['./select-year.page.scss'],
})
export class SelectYearPage implements OnInit {

  @Input() currentYear: any;

  years = [];

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    let today = new Date();
    const startYear = today.getFullYear() - 60;
    const endYear = today.getFullYear() + 60;

    for(let i = startYear; i <= endYear; i++) {
      this.years.push(i);
    }

    setTimeout(() => {
      let currentYearElement = document.getElementById(this.currentYear);
      if (currentYearElement) {
        currentYearElement.scrollIntoView();
      }
    }, 200);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  select(year: any) {
    this.modalController.dismiss(year);
  }
}

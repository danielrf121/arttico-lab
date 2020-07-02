import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var window;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  sendEmail() {
    let link = 'mailto: daniel.rf121@gmail.com';
    window.location = link;
  }

  linkedin() {
    let link = 'https://www.linkedin.com/in/danielrfernandes/';
    window.location = link;
  }

  behance() {
    let link = 'https://www.behance.net/danielrodriguesf';
    window.location = link;
  }
}

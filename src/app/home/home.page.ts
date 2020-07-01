import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
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

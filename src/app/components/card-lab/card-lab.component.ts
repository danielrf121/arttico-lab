import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-lab',
  templateUrl: './card-lab.component.html',
  styleUrls: ['./card-lab.component.scss'],
})
export class CardLabComponent implements OnInit {

  @Input() lab: any;

  constructor() { }

  ngOnInit() {
    console.log(this.lab);
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardLabComponent } from './card-lab.component';

describe('CardLabComponent', () => {
  let component: CardLabComponent;
  let fixture: ComponentFixture<CardLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

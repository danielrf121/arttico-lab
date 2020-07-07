import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScrollProfilePage } from './scroll-profile.page';

describe('ScrollProfilePage', () => {
  let component: ScrollProfilePage;
  let fixture: ComponentFixture<ScrollProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScrollProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

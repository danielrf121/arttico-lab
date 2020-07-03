import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectMonthPage } from './select-month.page';

describe('SelectMonthPage', () => {
  let component: SelectMonthPage;
  let fixture: ComponentFixture<SelectMonthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMonthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectMonthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

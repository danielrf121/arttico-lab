import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectYearPage } from './select-year.page';

describe('SelectYearPage', () => {
  let component: SelectYearPage;
  let fixture: ComponentFixture<SelectYearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectYearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

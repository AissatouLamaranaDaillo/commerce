import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListpanierPage } from './listpanier.page';

describe('ListpanierPage', () => {
  let component: ListpanierPage;
  let fixture: ComponentFixture<ListpanierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpanierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListpanierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosFestasComponent } from './bolos-festas.component';

describe('BolosFestasComponent', () => {
  let component: BolosFestasComponent;
  let fixture: ComponentFixture<BolosFestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolosFestasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolosFestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

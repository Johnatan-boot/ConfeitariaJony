import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosTradcionaisComponent } from './bolos-tradcionais.component';

describe('BolosTradcionaisComponent', () => {
  let component: BolosTradcionaisComponent;
  let fixture: ComponentFixture<BolosTradcionaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolosTradcionaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolosTradcionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

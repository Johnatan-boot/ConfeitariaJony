import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosCoberturaComponent } from './bolos-cobertura.component';

describe('BolosCoberturaComponent', () => {
  let component: BolosCoberturaComponent;
  let fixture: ComponentFixture<BolosCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolosCoberturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolosCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

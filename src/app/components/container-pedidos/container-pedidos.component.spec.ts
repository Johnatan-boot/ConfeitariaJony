import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPedidosComponent } from './container-pedidos.component';

describe('ContainerPedidosComponent', () => {
  let component: ContainerPedidosComponent;
  let fixture: ComponentFixture<ContainerPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

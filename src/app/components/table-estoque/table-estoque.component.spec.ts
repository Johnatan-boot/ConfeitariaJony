import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEstoqueComponent } from './table-estoque.component';

describe('TableEstoqueComponent', () => {
  let component: TableEstoqueComponent;
  let fixture: ComponentFixture<TableEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

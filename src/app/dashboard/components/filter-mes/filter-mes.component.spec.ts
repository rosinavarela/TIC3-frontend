import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMesComponent } from './filter-mes.component';

describe('FilterMesComponent', () => {
  let component: FilterMesComponent;
  let fixture: ComponentFixture<FilterMesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterMesComponent]
    });
    fixture = TestBed.createComponent(FilterMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

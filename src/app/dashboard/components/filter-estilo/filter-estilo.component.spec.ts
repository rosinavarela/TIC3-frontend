import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEstiloComponent } from './filter-estilo.component';

describe('FilterEstiloComponent', () => {
  let component: FilterEstiloComponent;
  let fixture: ComponentFixture<FilterEstiloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterEstiloComponent]
    });
    fixture = TestBed.createComponent(FilterEstiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

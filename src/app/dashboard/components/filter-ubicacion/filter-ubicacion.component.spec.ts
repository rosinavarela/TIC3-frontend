import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUbicacionComponent } from './filter-ubicacion.component';

describe('FilterUbicacionComponent', () => {
  let component: FilterUbicacionComponent;
  let fixture: ComponentFixture<FilterUbicacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterUbicacionComponent]
    });
    fixture = TestBed.createComponent(FilterUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

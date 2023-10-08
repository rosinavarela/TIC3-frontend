import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLocalComponent } from './filter-local.component';

describe('FilterLocalComponent', () => {
  let component: FilterLocalComponent;
  let fixture: ComponentFixture<FilterLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterLocalComponent]
    });
    fixture = TestBed.createComponent(FilterLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

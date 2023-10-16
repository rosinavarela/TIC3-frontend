import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandApplicationComponent } from './expand-application.component';

describe('ExpandApplicationComponent', () => {
  let component: ExpandApplicationComponent;
  let fixture: ComponentFixture<ExpandApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandApplicationComponent]
    });
    fixture = TestBed.createComponent(ExpandApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

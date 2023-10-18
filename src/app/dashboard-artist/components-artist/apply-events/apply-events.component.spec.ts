import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ApplyEventsComponent } from './apply-events.component';

describe('ApplyEventsComponent', () => {
  let component: ApplyEventsComponent;
  let fixture: ComponentFixture<ApplyEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyEventsComponent]
    });
    fixture = TestBed.createComponent(ApplyEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedEventComponent } from './expanded-event.component';

describe('ExpandedEventComponent', () => {
  let component: ExpandedEventComponent;
  let fixture: ComponentFixture<ExpandedEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandedEventComponent]
    });
    fixture = TestBed.createComponent(ExpandedEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

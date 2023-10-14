import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedEventBusinessComponent } from './expanded-event-business.component';

describe('ExpandedEventBusinessComponent', () => {
  let component: ExpandedEventBusinessComponent;
  let fixture: ComponentFixture<ExpandedEventBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandedEventBusinessComponent]
    });
    fixture = TestBed.createComponent(ExpandedEventBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

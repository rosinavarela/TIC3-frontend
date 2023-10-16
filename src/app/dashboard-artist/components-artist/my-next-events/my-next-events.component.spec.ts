import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNextEventsComponent } from './my-next-events.component';

describe('MyNextEventsComponent', () => {
  let component: MyNextEventsComponent;
  let fixture: ComponentFixture<MyNextEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNextEventsComponent]
    });
    fixture = TestBed.createComponent(MyNextEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

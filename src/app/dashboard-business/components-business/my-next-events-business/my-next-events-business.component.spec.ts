import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNextEventsBusinessComponent } from './my-next-events-business.component';

describe('MyNextEventsBusinessComponent', () => {
  let component: MyNextEventsBusinessComponent;
  let fixture: ComponentFixture<MyNextEventsBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNextEventsBusinessComponent]
    });
    fixture = TestBed.createComponent(MyNextEventsBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

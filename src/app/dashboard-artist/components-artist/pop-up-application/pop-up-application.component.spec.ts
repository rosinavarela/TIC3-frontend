import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpApplicationComponent } from './pop-up-application.component';

describe('PopUpApplicationComponent', () => {
  let component: PopUpApplicationComponent;
  let fixture: ComponentFixture<PopUpApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpApplicationComponent]
    });
    fixture = TestBed.createComponent(PopUpApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

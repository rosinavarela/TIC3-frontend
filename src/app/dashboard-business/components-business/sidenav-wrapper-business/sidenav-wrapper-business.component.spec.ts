import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWrapperBusinessComponent } from './sidenav-wrapper-business.component';

describe('SidenavWrapperBusinessComponent', () => {
  let component: SidenavWrapperBusinessComponent;
  let fixture: ComponentFixture<SidenavWrapperBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavWrapperBusinessComponent]
    });
    fixture = TestBed.createComponent(SidenavWrapperBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

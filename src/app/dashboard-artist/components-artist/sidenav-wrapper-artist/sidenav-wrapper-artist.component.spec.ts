import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavWrapperArtistComponent } from './sidenav-wrapper-artist.component';

describe('SidenavWrapperArtistComponent', () => {
  let component: SidenavWrapperArtistComponent;
  let fixture: ComponentFixture<SidenavWrapperArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavWrapperArtistComponent]
    });
    fixture = TestBed.createComponent(SidenavWrapperArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

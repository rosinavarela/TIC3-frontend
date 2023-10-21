import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistViewProfileComponent } from './artist-view-profile.component';

describe('ArtistViewProfileComponent', () => {
  let component: ArtistViewProfileComponent;
  let fixture: ComponentFixture<ArtistViewProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistViewProfileComponent]
    });
    fixture = TestBed.createComponent(ArtistViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

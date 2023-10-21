import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileBusinessComponent } from './artist-profile-business.component';

describe('ArtistProfileBusinessComponent', () => {
  let component: ArtistProfileBusinessComponent;
  let fixture: ComponentFixture<ArtistProfileBusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistProfileBusinessComponent]
    });
    fixture = TestBed.createComponent(ArtistProfileBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

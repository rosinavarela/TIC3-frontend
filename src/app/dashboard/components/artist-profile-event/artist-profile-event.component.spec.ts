import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistProfileEventComponent } from './artist-profile-event.component';

describe('ArtistProfileEventComponent', () => {
  let component: ArtistProfileEventComponent;
  let fixture: ComponentFixture<ArtistProfileEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistProfileEventComponent]
    });
    fixture = TestBed.createComponent(ArtistProfileEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

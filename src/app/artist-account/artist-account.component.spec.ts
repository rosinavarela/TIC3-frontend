import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAccountComponent } from './artist-account.component';

describe('ArtistAccountComponent', () => {
  let component: ArtistAccountComponent;
  let fixture: ComponentFixture<ArtistAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistAccountComponent]
    });
    fixture = TestBed.createComponent(ArtistAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

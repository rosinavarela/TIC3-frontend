import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpArtistComponent } from './pop-up-artist.component';

describe('PopUpArtistComponent', () => {
  let component: PopUpArtistComponent;
  let fixture: ComponentFixture<PopUpArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpArtistComponent]
    });
    fixture = TestBed.createComponent(PopUpArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

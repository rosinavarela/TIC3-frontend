import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLocalArtistComponent } from './filter-local-artist.component';

describe('FilterLocalArtistComponent', () => {
  let component: FilterLocalArtistComponent;
  let fixture: ComponentFixture<FilterLocalArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterLocalArtistComponent]
    });
    fixture = TestBed.createComponent(FilterLocalArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

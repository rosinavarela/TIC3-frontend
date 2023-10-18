import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUbicacionArtistComponent } from './filter-ubicacion-artist.component';

describe('FilterUbicacionArtistComponent', () => {
  let component: FilterUbicacionArtistComponent;
  let fixture: ComponentFixture<FilterUbicacionArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterUbicacionArtistComponent]
    });
    fixture = TestBed.createComponent(FilterUbicacionArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

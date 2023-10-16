import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEstiloArtistComponent } from './filter-estilo-artist.component';

describe('FilterEstiloArtistComponent', () => {
  let component: FilterEstiloArtistComponent;
  let fixture: ComponentFixture<FilterEstiloArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterEstiloArtistComponent]
    });
    fixture = TestBed.createComponent(FilterEstiloArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

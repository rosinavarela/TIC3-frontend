import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMesArtistComponent } from './filter-mes-artist.component';

describe('FilterMesArtistComponent', () => {
  let component: FilterMesArtistComponent;
  let fixture: ComponentFixture<FilterMesArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterMesArtistComponent]
    });
    fixture = TestBed.createComponent(FilterMesArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

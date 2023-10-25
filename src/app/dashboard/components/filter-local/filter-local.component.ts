import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EventService } from 'src/app/services/event/event.service';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-filter-local',
  templateUrl: 'filter-local.component.html',
  styleUrls: ['filter-local.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
})
export class FilterLocalComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: Observable<string[]>;
  selectedOption: string | null = null;

  constructor(private eventService: EventService, private filterService: FilterService){}

  ngOnInit() {
    this.options = ['Ninguno'];
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith('Ninguno'),
      map(value => this._filter(value || '')),
    );
    this.eventService.getBusinessNames().subscribe(
      (data: string[]) => {
        this.options = this.options.concat(data);
      },
      (error) => {
        console.error('Error fetching business names:', error);
      }
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: any): void {
    if (event.option.value === 'Ninguno') {
      this.selectedOption = '';
    } else {
      this.selectedOption = event.option.value;
    }
    this.filterService.updateLocalSelected(this.selectedOption);
  }
}
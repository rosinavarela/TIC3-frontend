import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterService } from 'src/app/services/filter/filter.service';

@Component({
  selector: 'app-filter-mes',
  templateUrl: 'filter-mes.component.html',
  styleUrls: ['filter-mes.component.css'],
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
export class FilterMesComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['7 días', '30 días', '60 días'];
  filteredOptions!: Observable<string[]>;
  selectedOption: number | null = null;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: any): void {

    if(event.option.value === '7 días'){
      this.selectedOption = 1;
    } else if (event.option.value === '30 días'){
      this.selectedOption = 2;
    }else if (event.option.value === '60 días'){
      this.selectedOption = 3;
    }
    console.log('Selected time:', this.selectedOption);
    this.filterService.updateTimeSelected(this.selectedOption);
  }
}
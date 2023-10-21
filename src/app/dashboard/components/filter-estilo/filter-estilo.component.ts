import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterEstiloService } from 'src/app/services/filter/filter-estilo.service';

@Component({
  selector: 'app-filter-estilo',
  templateUrl: 'filter-estilo.component.html',
  styleUrls: ['filter-estilo.component.css'],
})
export class FilterEstiloComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['Pop', 'Rock', 'Jazz', 'Clásica', 'Alternativo', 'Indie', 'Cumbia', 'Rap/Trap', 'Otro'];
  filteredOptions!: Observable<string[]>;
  selectedOption: string | null = null;

  constructor(private filterEstiloService: FilterEstiloService) { }

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
    this.selectedOption = event.option.value.toLowerCase();
    console.log('Selected Option:', this.selectedOption);
    this.filterEstiloService.updateEstiloSelected(this.selectedOption);
  }
}
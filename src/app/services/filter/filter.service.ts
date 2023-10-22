import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FilterService {
  private estiloSelectedSource = new BehaviorSubject<string | null>(null);
  estiloSelected = this.estiloSelectedSource.asObservable();

  private localSelectedSource = new BehaviorSubject<string | null>(null);
  localSelected = this.localSelectedSource.asObservable();

  updateEstiloSelected(style: string | null) {
    this.estiloSelectedSource.next(style);
  }

  updateLocalSelected(local: string | null) {
    this.localSelectedSource.next(local);
  }
}

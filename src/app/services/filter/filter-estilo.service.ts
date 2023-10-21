import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FilterEstiloService {
  private estiloSelectedSource = new BehaviorSubject<string | null>(null);
  estiloSelected = this.estiloSelectedSource.asObservable();

  updateEstiloSelected(style: string | null) {
    this.estiloSelectedSource.next(style);
  }
}

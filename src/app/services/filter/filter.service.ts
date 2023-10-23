import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class FilterService {
  private estiloSelectedSource = new BehaviorSubject<string | null>(null);
  estiloSelected = this.estiloSelectedSource.asObservable();

  private localSelectedSource = new BehaviorSubject<string | null>(null);
  localSelected = this.localSelectedSource.asObservable();

  private timeSelectedSource = new BehaviorSubject<number | null>(null);
  timeSelected = this.timeSelectedSource.asObservable();

  private ubicacionSelectedSource = new BehaviorSubject<string | null>(null);
  ubicacionSelected = this.ubicacionSelectedSource.asObservable();

  updateEstiloSelected(style: string | null) {
    this.estiloSelectedSource.next(style);
  }

  updateLocalSelected(local: string | null) {
    this.localSelectedSource.next(local);
  }

  updateTimeSelected(time: number | null) {
    this.timeSelectedSource.next(time);
  }

  updateUbicacionSelected(ubicacion: string | null) {
    this.ubicacionSelectedSource.next(ubicacion);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErorrPopService {

  createErrorPopup(errorMessage: string): void {
    alert(`Klaida: ${errorMessage}`);
  }
  
  constructor() { }

}
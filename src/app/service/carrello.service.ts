import { Injectable } from '@angular/core';
import { prodotto } from '../data/prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private carrello:prodotto[] = []
  private somma = 0

  constructor() { }

  addProdotto(prod: prodotto) {
    this.carrello.push(prod)
  }

  getCarrello() {
    return this.carrello
  }

  calcolaTotale() {
    this.somma = this.somma + this.carrello[this.getCarrello().length-1].prezzo
  }

  getSomma() {
    return this.somma
  }

  cleatSomma() {
    this.somma = 0
  }

  clearCarrello() {
    this.carrello = []
  }

}


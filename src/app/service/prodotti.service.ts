import { Injectable } from '@angular/core';
import { prodotto } from '../data/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private _prodotti:prodotto[] = [

    {slug: "prod1", nome: "iPhone 14 Pro Max", descrizione: "Viola - (128GB)", prezzo: 1489, new: true, popolare: false, immagine: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_SX679_.jpg"},
    {slug: "prod2", nome: "iPhone 14 Pro", descrizione: "Oro - (128GB)", prezzo: 1339, new: true, popolare: false, immagine: "https://m.media-amazon.com/images/I/71ZDY57yTQL._AC_SX679_.jpg"},
    {slug: "prod3", nome: "iPhone 14 Plus", descrizione: "Rosso - (128GB)", prezzo: 1179, new: true, popolare: false, immagine: "https://m.media-amazon.com/images/I/716fAVud8PL._AC_SX679_.jpg"},
    {slug: "prod4", nome: "iPhone 14", descrizione: "Azzurro - (128GB)", prezzo: 1029, new: true, popolare: true, immagine: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg"},
    {slug: "prod5", nome: "iPhone 13", descrizione: "Blu - (128GB)", prezzo: 939, new: false, popolare: true, immagine: "https://m.media-amazon.com/images/I/71dpTXFz+dL._AC_SX679_.jpg"},
    {slug: "prod6", nome: "iPhone 13 mini", descrizione: "Rosa - (128GB)", prezzo: 839, new: false, popolare: false, immagine: "https://m.media-amazon.com/images/I/61L1jJQuZGL._AC_SX679_.jpg"},
    {slug: "prod7", nome: "iPhone 12", descrizione: "Bianco - (128GB)", prezzo: 889, new: false, popolare: true, immagine: "https://m.media-amazon.com/images/I/71fuALlOJ7L._AC_SX679_.jpg"},
    {slug: "prod8", nome: "iPhone 12 mini", descrizione: "Nero - (128GB)", prezzo: 711, new: false, popolare: false, immagine: "https://m.media-amazon.com/images/I/710LmPSDpbL._AC_SX679_.jpg"},
    {slug: "prod9", nome: "iPhone SE", descrizione: "Mezzanotte - (128GB)", prezzo: 579, new: false, popolare: false, immagine: "https://m.media-amazon.com/images/I/61TOWf11+jL._AC_SX679_.jpg"},

  ]

  constructor() { }

  cercaProdotto(slug: string) {
    return this._prodotti.find(p => p.slug === slug)
  }

  getProdotti() {
    return this._prodotti
  }

}


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { prodotto } from '../data/prodotto';
import { CarrelloService } from '../service/carrello.service';
import { ProdottiService } from '../service/prodotti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prodPopolari: prodotto[] = []
  prodottoCarrello: object

  constructor(private authService: AuthService, private listaProdotti: ProdottiService, private carrello: CarrelloService) {

    const prodotti = listaProdotti.getProdotti()

    for (const prod of prodotti) {
      if (prod.popolare) {
        this.prodPopolari.push(prod)
      }
    }
  }

  onClick(prodottoCarrello: prodotto) {

    if (this.authService.isAuthenticated()) {
      this.carrello.addProdotto(prodottoCarrello);

      this.carrello.calcolaTotale()

      console.log(this.carrello.getCarrello());
      alert("Prodotto aggiunto al carrello");
    }
    else {
      alert("Devi essere autenticato per aggiungere un prodotto al carrello")
    }


  }

  ngOnInit(): void {
  }

}

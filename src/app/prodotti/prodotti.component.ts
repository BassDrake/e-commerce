import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { prodotto } from '../data/prodotto';
import { CarrelloService } from '../service/carrello.service';
import { ProdottiService } from '../service/prodotti.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  constructor(private authService: AuthService, private listaProdotti: ProdottiService, private carrello: CarrelloService) {

  }

  prodotti = this.listaProdotti.getProdotti()

  ngOnInit(): void {
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

}

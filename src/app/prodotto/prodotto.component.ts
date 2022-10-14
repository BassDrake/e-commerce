import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { prodotto } from '../data/prodotto';
import { CarrelloService } from '../service/carrello.service';
import { ProdottiService } from '../service/prodotti.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  prodotto?:prodotto

  constructor(private route: ActivatedRoute, private authService: AuthService, private prodottiService: ProdottiService, private carrello: CarrelloService) {
    console.log(route);
    const { slug } = route?.snapshot?.params ?? {}
    //const slug = route.snapshot.params["slug"]
    this.prodotto = prodottiService.cercaProdotto(slug)

  }

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

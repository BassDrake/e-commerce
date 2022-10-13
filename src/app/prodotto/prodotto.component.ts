import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { prodotto } from '../data/prodotto';
import { ProdottiService } from '../service/prodotti.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  prodotto?:prodotto

  constructor(private route: ActivatedRoute, private prodottoService:ProdottiService) {
    console.log(route);
    const { slug } = route?.snapshot?.params ?? {}
    //const slug = route.snapshot.params["slug"]
    this.prodotto = prodottoService.cercaProdotto(slug)

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { CarrelloService } from '../service/carrello.service';
import { CheckoutService } from '../service/checkout.service';

@Component({
  selector: 'app-confirmed-payment',
  templateUrl: './confirmed-payment.component.html',
  styleUrls: ['./confirmed-payment.component.css']
})
export class ConfirmedPaymentComponent implements OnInit {

  constructor(private checkoutForm: CheckoutService, private carrello: CarrelloService) {
  }

  pagamento = this.checkoutForm.getCheckoutForm()
  carrelloProdotti = this.carrello.getCarrello()
  sommaCarrello = this.carrello.getSomma()

  data = Date.now()

  ngOnInit(): void {
  }

}

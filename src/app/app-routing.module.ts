import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CarrelloComponent } from './carrello/carrello.component';
import { ConfirmedPaymentComponent } from './confirmed-payment/confirmed-payment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'prodotti', component: ProdottiComponent },
  { path: 'carrello', component: CarrelloComponent, canActivate: [AuthGuard] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path:"prodotti/:slug", component: ProdottoComponent },
  { path: 'confirmedPayment', component: ConfirmedPaymentComponent, canActivate: [AuthGuard] },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CarrelloComponent } from './carrello/carrello.component'

import { HighlightDirective } from './directives/highlight.directive';

import {MatCardModule} from '@angular/material/card';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ConfirmedPaymentComponent } from './confirmed-payment/confirmed-payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdottoComponent } from './prodotto/prodotto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarrelloComponent,
    ProdottiComponent,
    NotfoundComponent,
    SignUpComponent,
    LoginComponent,
    HighlightDirective,
    ConfirmedPaymentComponent,
    ProdottoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

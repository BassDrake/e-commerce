import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CarrelloService } from '../service/carrello.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private _router: Router, private carrello: CarrelloService) {}

  backgroundColor = '#0D6EFD'
  colore = 'white'

  logged: boolean

  ngOnInit(): void {
    new Observable(observer => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        count++
      }, 1000);
    }).subscribe((numero) => {
      //console.log(numero);
      this.logged = this.authService.isAuthenticated()
      //console.log(this.logged);
    });
  }

  checkAuth() {

    if(this.authService.isAuthenticated()) {
      this._router.navigate(['/carrello'])
    }
    else {
      alert("Devi essere autenticato per proseguire")
    }

  }

  onClickLogout() {
    this.authService.setLogged(false)
    this.carrello.clearCarrello()
    this.carrello.cleatSomma()
    alert("Ti sei disconnesso")
    this._router.navigate(['/'])
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isRegister = false;

  setAuth() {
    this.isRegister = !this.isRegister;
  }

  setToLogin() {
    this.isRegister = false;
  }
}

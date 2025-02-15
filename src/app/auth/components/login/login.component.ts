import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-login',
  imports: [RouterModule, AuthComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public authService = inject(AuthService);

  ngOnInit() {}
  login() {
    this.authService.login();
  }
}

import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-register',
  imports: [RouterModule, AuthComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private _authService = inject(AuthService);

  register() {
    this._authService.register();
  }
}

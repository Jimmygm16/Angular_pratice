import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    email: '',
    username: '',
    password: ''
  }

  constructor( private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user.email, this.user.username, this.user.password).subscribe({
      next: (response) => {
        console.log('Registro exitoso', response);
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('actual_user', this.user.username);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error en el registro', error);
        alert('Error en el registro: ' + (error.error.message || error.message));
      }
    });
  }
}

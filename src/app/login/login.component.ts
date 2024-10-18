import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; // Para redirigir después de la autenticación
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  }

  constructor(private authService: AuthService, private router: Router) {}

  // Método que se llamará cuando el usuario intente iniciar sesión
  onLogin() {
    this.authService.login(this.user.username, this.user.password).subscribe({
      next: (response) => {
        // Guarda el token o redirige al usuario
        console.log('Login exitoso', response);
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('actual_user', this.user.username);
        // Redirige al usuario a la página protegida
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Error en el login', error);
      },
    });
  }
}

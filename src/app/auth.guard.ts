import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service'; // Asegúrate de importar tu servicio

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    // Verificar si el token está presente en el almacenamiento local
    const token = localStorage.getItem('access_token');

    if (!token) {
      // Si no hay token, redirigir a la página de login
      this.router.navigate(['']);
      return false; // Bloquear el acceso
    }

    return true; // Permitir el acceso
  }
}

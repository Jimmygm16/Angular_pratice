import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username = localStorage.getItem('actual_user');
  token = localStorage.getItem('access_token');
  constructor(private router: Router) { }

  logOut(){
    localStorage.removeItem('actual_user');
    localStorage.removeItem('access_token');
    console.log('Logging out');
    this.router.navigate(['']);
  }

  redirectToLogin(){
    this.router.navigate(['']);
  }
}

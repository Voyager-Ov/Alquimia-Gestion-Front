import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ClienteGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}');

    if (user && user.tipo_de_usuario === 'cliente') {
      return true;
    }

    this.router.navigate(['inicio-de-sesion']);
    return false;
  }
}
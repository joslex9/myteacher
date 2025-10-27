import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }

    const requiredRole = route.data?.['role'] as 'estudiante' | 'tutor' | undefined;

    if (!requiredRole) {
      // si la ruta no exige rol específico, entra normal
      return true;
    }

    if (this.auth.user?.role === requiredRole) {
      return true;
    }

    // si tiene otro rol, lo mandamos a su dashboard correcto
    if (this.auth.user?.role === 'tutor') {
      this.router.navigate(['/tutor/dashboard']);
    } else {
      this.router.navigate(['/student/dashboard']);
    }
    return false;
  }
}

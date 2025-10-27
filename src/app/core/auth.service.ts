import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type Role = 'estudiante' | 'tutor';

export interface User {
  email: string;
  role: Role;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User | null = null;

  // Usuarios de prueba
  private validUsers: Record<string, { password: string; role: Role }> = {
    'estudiante@myteacher.com': { password: '1234', role: 'estudiante' },
    'tutor@myteacher.com':      { password: 'abcd', role: 'tutor' }
  };

  constructor(private router: Router) {}

  get user(): User | null {
    return this.currentUser;
  }

  get isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  login(email: string, password: string): boolean {
    const u = this.validUsers[email];

    if (!u || u.password !== password) {
      return false;
    }

    // guardar sesión
    this.currentUser = { email, role: u.role };

    // redirigir según rol
    if (u.role === 'tutor') {
      this.router.navigate(['/tutor/dashboard']);
    } else {
      this.router.navigate(['/student/dashboard']);
    }

    return true;
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }
}

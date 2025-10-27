import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  role: 'tutor' | 'estudiante' = 'estudiante';
  email = '';
  password = '';
  confirmPassword = '';

  errorMsg = '';

  constructor(private router: Router) {}

  setRole(value: 'tutor' | 'estudiante') {
    this.role = value;
  }

  onSubmit(form: NgForm) {
    this.errorMsg = '';

    if (form.invalid) {
      this.errorMsg = 'Por favor completa todos los campos.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMsg = 'Las contraseñas no coinciden.';
      return;
    }

    // Aquí iría tu lógica real de signup (API / Firebase / etc)
    alert(
      `Registro exitoso 🎉\nRol: ${this.role}\nEmail: ${this.email}`
    );

    // Redirección según rol
    if (this.role === 'estudiante') {
      this.router.navigate(['/student/dashboard']);
    } else {
      this.router.navigate(['/tutor/dashboard']);
    }
  }
}

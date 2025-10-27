import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = 'estudiante@myteacher.com';
  password = '1234';
  role: 'estudiante' | 'tutor' = 'estudiante';

  constructor(private auth: AuthService) {}

  onSubmit() {
    if (this.role === 'tutor') {
      this.email = 'tutor@myteacher.com';
      this.password = 'abcd';
    }

    const ok = this.auth.login(this.email, this.password);
    if (!ok) alert('Credenciales incorrectas');
  }
}

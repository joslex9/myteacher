import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent {
  prompt = '';

  constructor(private router: Router) {}

  logout() {
    // Limpia sesión (ajusta si usas otro storage / token)
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  sendMessage(e: Event) {
    e.preventDefault();
    if (!this.prompt.trim()) return;

    alert('📤 Pregunta enviada a la IA: ' + this.prompt);
    this.prompt = '';
  }

  quickAsk(text: string) {
    this.prompt = text;
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tutor-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.scss'],
})
export class TutorProfileComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

  // Opcional: acción cuando hacen click en "+"
  addSpecialty() {
    alert('Aquí abrirías un modal para agregar una especialización nueva');
  }

  cancelTutoring(asignatura: string) {
    alert('Cancelar tutoría de: ' + asignatura);
  }
}

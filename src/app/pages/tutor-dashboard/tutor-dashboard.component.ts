import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

// Este tipo describe cada fila de la tabla de tutorías
export interface TutoriaProgramada {
  materia: string;          // ej. "Matemáticas Avanzadas"
  detalle: string;          // ej. "Temáticas avanzadas"
  hora: string;             // ej. "10:00 AM"
  horaExtra?: string;       // ej. "15-03-2024"
  fecha: string;            // ej. "02/9/25"
  duracionHoras: number;    // ej. 2
}

@Component({
  selector: 'app-tutor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss'],
})
export class TutorDashboardComponent {
  // Métricas del resumen (las cards de arriba)
  clasesCompletadas = 15;
  deltaClasesMes = 15;

  horasTutoria = 18;
  horasUltimaSemana = 10.5;

  // Tabla de tutorías programadas
  tutorias: TutoriaProgramada[] = [
    {
      materia: 'Matemáticas Avanzadas',
      detalle: 'Temáticas avanzadas',
      hora: '10:00 AM',
      horaExtra: '15-03-2024',
      fecha: '02/9/25',
      duracionHoras: 2,
    },
    {
      materia: 'Física Cuántica',
      detalle: 'Clásica → Cuántica',
      hora: '11:30 AM',
      horaExtra: '15-03-2024',
      fecha: '12/9/25',
      duracionHoras: 1,
    },
    {
      materia: 'Química Orgánica',
      detalle: 'Estructuras y reacciones',
      hora: '09:00 AM',
      horaExtra: '16-03-2024',
      fecha: '22/9/25',
      duracionHoras: 2,
    },
    {
      materia: 'Programación Python',
      detalle: 'Intro a Python',
      hora: '02:00 PM',
      horaExtra: '16-03-2024',
      fecha: '02/10/25',
      duracionHoras: 1,
    },
    {
      materia: 'Literatura Española',
      detalle: 'Análisis textual',
      hora: '04:00 PM',
      horaExtra: '17-03-2024',
      fecha: '15/10/25',
      duracionHoras: 2,
    },
  ];

  constructor(private router: Router) {}

  // Navega a la vista / formulario para crear una nueva tutoría
  crearTutoria() {
    console.log('→ crearTutoria()');
    // idea: abre modal o navega a una ruta tipo /tutor/nueva-tutoria
    // this.router.navigate(['/tutor/nueva-tutoria']);
    alert('Aquí abrirías el formulario para crear una nueva tutoría 👨‍🏫');
  }

  // Abre la "sala" o videollamada de esa tutoría
  iniciarTutoria(clase: TutoriaProgramada) {
    console.log('→ iniciarTutoria()', clase);
    // idea: podría enviar al componente de videollamada con parámetros
    // this.router.navigate(['/video-call'], { queryParams: { materia: clase.materia }});
    this.router.navigate(['/video-call']);
  }

  // Cierra sesión y vuelve al login
  logout() {
    console.log('→ logout()');
    // ejemplo básico:
    // localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

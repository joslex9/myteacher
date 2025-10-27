import { Routes } from '@angular/router';

// Páginas principales
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

// Dashboards
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { TutorDashboardComponent } from './pages/tutor-dashboard/tutor-dashboard.component';

// Perfiles
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { TutorProfileComponent } from './pages/tutor-profile/tutor-profile.component';

// Otras páginas
import { CalendarComponent } from './pages/calendar/calendar.component';
import { VideoCallComponent } from './pages/video-call/video-call.component';

// Guards
import { AuthGuard } from './core/auth.guard';
import { RoleGuard } from './core/role.guard';

export const routes: Routes = [
  // Landing principal
  { path: '', component: LandingComponent },

  // Login y Registro
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Dashboard del Estudiante
  {
    path: 'student/dashboard',
    component: StudentDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'estudiante' },
  },

  // Perfil del Estudiante
  {
    path: 'student/profile',
    component: StudentProfileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'estudiante' },
  },

  // Dashboard del Tutor
  {
    path: 'tutor/dashboard',
    component: TutorDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'tutor' },
  },

  // Perfil del Tutor
  {
    path: 'tutor/profile',
    component: TutorProfileComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { role: 'tutor' },
  },

  // Calendario
  {
    path: 'calendar',
    component: CalendarComponent,
    canActivate: [AuthGuard],
  },

  // Videollamadas
  {
    path: 'video-call',
    component: VideoCallComponent,
    canActivate: [AuthGuard],
  },

  // Redirección por defecto
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

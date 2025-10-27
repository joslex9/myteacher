import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  calendarOptions: any = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    locale: esLocale,
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'Tutoría Matemáticas',
        start: '2025-10-28T10:00:00',
        extendedProps: { profesor: 'Ana Gómez' }
      },
      {
        title: 'Tutoría Física',
        start: '2025-10-30T15:00:00',
        extendedProps: { profesor: 'Marcos Díaz' }
      }
    ],
    eventClick: (info: any) => {
      alert(
        `Clase: ${info.event.title}\nInicio: ${info.event.start?.toLocaleString()}\nTutor: ${info.event.extendedProps.profesor}`
      );
    }
  };
}

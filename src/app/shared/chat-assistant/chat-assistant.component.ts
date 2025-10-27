import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  time: string;
}

@Component({
  selector: 'app-chat-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-assistant.component.html',
  styleUrls: ['./chat-assistant.component.scss']
})
export class ChatAssistantComponent {
  messages: ChatMessage[] = [
    { role: 'bot', text: '👋 ¡Hola! Soy tu asistente. ¿Qué tema quieres repasar hoy?', time: this.now() }
  ];
  prompt = '';

  private now(): string {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  async send(text?: string) {
    const message = (text ?? this.prompt).trim();
    if (!message) return;

    // Agrega el mensaje del usuario
    this.messages.push({ role: 'user', text: message, time: this.now() });
    this.prompt = '';

    // Mensaje temporal del bot
    this.messages.push({ role: 'bot', text: '...', time: this.now() });

    // Simula respuesta IA
    const reply = await this.fakeAI(message);

    // Reemplaza el "..." por la respuesta real
    this.messages.pop();
    this.messages.push({ role: 'bot', text: reply, time: this.now() });
  }

  private async fakeAI(msg: string): Promise<string> {
    const lower = msg.toLowerCase();

    if (lower.includes('derivada')) 
      return 'Una derivada mide el cambio instantáneo de una función. Ejemplo: si f(x)=x², entonces f’(x)=2x.';
    
    if (lower.includes('límite') || lower.includes('limite'))
      return 'El límite indica a qué valor se aproxima una función. Ejemplo: lim(x→0) (sin x)/x = 1.';

    if (lower.includes('historia'))
      return 'La Segunda Guerra Mundial ocurrió entre 1939 y 1945. Fue un conflicto global entre los Aliados y el Eje.';

    return 'Puedo explicarte temas de matemáticas, física o historia. Escríbeme una pregunta o elige una sugerencia 👇';
  }
}

import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { NotificationService } from '../../servicios/notification.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message: string;
  element: any;
  loggedUser:any;

  constructor(
    public chatService: ChatService,
    private notification: NotificationService
  ) {
    this.message = '';
    this.chatService.loadAllMessages().subscribe();
    this.loggedUser = sessionStorage.getItem('loggedUser');
  }

  ngOnInit(): void {}

  async sendMessage() {
    try {
      if (this.message.length === 0) {
        return;
      }
      await this.chatService.addMessage(this.message);
    } catch (error: any) {
      this.notification.openSnackBar(error.message, 'Cerrar');
    } finally {
      this.message = '';
    }
  }
}

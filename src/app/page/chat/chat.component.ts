import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { NotificationService } from '../../servicios/notification.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { UserI } from 'src/app/clases/UserI';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  message: string;
  element: any;
  public currentUser!: UserI | null;

  constructor(
    public chatService: ChatService,
    private notification: NotificationService,
    private afAuth: AngularFireAuth
  ) {
    this.message = '';
    this.chatService.loadAllMessages().subscribe();
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
    });
    
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

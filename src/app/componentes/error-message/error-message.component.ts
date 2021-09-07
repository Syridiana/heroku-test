import { Component, OnInit } from '@angular/core';
import { ErrorMessagesService } from 'src/app/servicios/error-messages.service';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  constructor(public errorMessageService: ErrorMessagesService) { 
  }

  ngOnInit(): void {
  }

}

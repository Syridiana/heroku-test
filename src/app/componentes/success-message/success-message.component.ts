import { Component, OnInit } from '@angular/core';
import { SuccessMessageService } from 'src/app/servicios/success-message.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {

  constructor(public successMessageService: SuccessMessageService) { }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) {
  }

  clearMessages() {
    this.messageService.clear();
  }

  getMessages() {
    return this.messageService.messages;
  }

  ngOnInit() {
  }

}

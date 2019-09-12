import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-with-messages',
  templateUrl: './input-with-messages.component.html',
  styleUrls: ['./input-with-messages.component.scss'],
})
export class InputWithMessagesComponent implements OnInit {

  @Input() labelText: string;
  @Input('control') control: FormControl;
  @Input('messages') messages: any[];

  constructor() { }
  ngOnInit() { }

  getMessages() {
    let keys = Object.keys(this.control.errors);
    return keys
      .map((key, i) => {
        return this.messages.filter((message : any) => message.name == key)[0];
      });
  }
}

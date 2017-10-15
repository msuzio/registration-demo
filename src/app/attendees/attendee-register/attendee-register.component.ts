import { Component, OnInit } from '@angular/core';

const states = '["MI","TX","CA"]';
@Component({
  selector: 'app-attendee-register',
  templateUrl: './attendee-register.component.html',
  styleUrls: ['./attendee-register.component.css']
})
export class AttendeeRegisterComponent implements OnInit {

  states: string[];
  constructor() { }

  ngOnInit() {
    this.states = JSON.parse(states);
  }

  onSubmit(event) {
    console.log("clicked submit" + event);
  }
}

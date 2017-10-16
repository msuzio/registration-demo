import { Component, OnInit } from '@angular/core';
import {AttendeeService} from '../service/attendee-service';
import {Attendee} from '../model/attendee';

const states = '["MI","TX","CA"]';
@Component({
  selector: 'app-attendee-register',
  templateUrl: './attendee-register.component.html',
  styleUrls: ['./attendee-register.component.css'],
  providers: [AttendeeService]
})
export class AttendeeRegisterComponent implements OnInit {

  states: string[];
  //
  // This is absolutely *not* the way to do this, I know, but..
  firstName: string = "";
  lastName: string = "";
  address: string="";
  address2: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    this.attendeeService
    .getStates().then((states: string[]) => {
        this.states = states.map((s) => {
          return s;
        });
      });
  }

  onSubmit(event) {
    var a : Attendee = new Attendee(this.firstName, this.lastName, this.address, this.address2, this.zipCode, this.city, this.state,this.country);
    this.attendeeService.createAttendee(a);
    
  }
}

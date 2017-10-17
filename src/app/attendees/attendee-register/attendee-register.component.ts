import { Component, OnInit } from '@angular/core';
import {AttendeeService} from '../service/attendee-service';
import {Attendee} from '../model/attendee';

@Component({
  selector: 'app-attendee-register',
  templateUrl: './attendee-register.component.html',
  styleUrls: ['./attendee-register.component.css'],
  providers: [AttendeeService]
})
export class AttendeeRegisterComponent implements OnInit {
  states: String[];
  // empty model
  model: Attendee = new Attendee("","","","","","","","");

  constructor(private attendeeService: AttendeeService) { }

  ngOnInit() {
    // this.attendeeService
    // .getStates().then((states: string[]) => {
    //     // this.states = states.map((s) => {
    //     //   return s;
    //     // });
    //   });
  }

  onSubmit(event) {
    var registered: Attendee;
    this.attendeeService.createAttendee(this.model).then((result:Attendee)=> {
      registered= result;
    });
  console.log(registered);
  }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}

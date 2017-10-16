import { Component, OnInit } from '@angular/core';
import {Attendee} from '../model/attendee';

const test = '{"_id":"59e36043d326bb195495d6fa","firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","id":"67ecb6e0-b1ab-11e7-80eb-292d5e7a1d8a","registerDate":"2017-10-15T13:18:59.918Z","formattedRegisterDate":"1:18:59 PM UTC"}';
@Component({
  selector: 'app-attendee-details',
  templateUrl: './attendee-details.component.html',
  styleUrls: ['./attendee-details.component.css']
})
export class AttendeeDetailsComponent implements OnInit {

  attendee: Attendee;

  constructor() { }

  ngOnInit() {
    this.attendee = JSON.parse(test);
    // console.log(this.attendee);
  }

}

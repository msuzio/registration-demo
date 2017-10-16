import { Component, OnInit } from '@angular/core';
import {Attendee} from '../model/attendee';
import {AttendeeService} from '../service/attendee-service';

const test = '[{"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111","_id":"bae644df4e474a1c955013075d43f6d6"},{"id":null,"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111","_id":"3dbacd3a334e42b7a6e3cd7d063bbf8c"},{"id":null,"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111","registerDate":"2017-10-14T16:56:55.308Z","_id":"0abe21daeaae40159e42f78d6dd48274"},{"id":null,"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111","registerDate":"2017-10-14T17:13:57.284Z","_id":"4da8e9175bfe40deaf80168e63c3761d"},{"id":null,"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111","registerDate":"2017-10-14T17:14:00.766Z","_id":"219e0b5a67b04596b96dd88ec0291a6f"},{"id":null,"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111","registerDate":"2017-10-14T17:14:01.996Z","_id":"3c1243ea1a5e466ea9d766ca411fae09"},{"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111","registerDate":"2017-10-14T17:14:02.985Z","_id":"9222fb486ef345efbcc70e1b306c140c","registerDate":"2017-10-15T13:18:59.918Z","formattedRegisterDate":"1:18:59 PM UTC"}]';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.css'],
  providers: [AttendeeService]
})
export class AttendeeListComponent implements OnInit {
  attendees: Attendee[];
  
  constructor(private attendeeService: AttendeeService) { 
  }

  ngOnInit() {
    // fetch list 
    var temp: Attendee[];
    this.attendeeService
    .getAttendees().then((thoseGuys: Attendee[]) => {
        // this.attendees = thoseGuys.map((guy) => {
        //   return guy;
        // });
      });

    
    // TODO - putting this in a pipe was troublesome -- fix that
    // WTF? THIS IS UNDEFINED??
    console.log("attendees list: " + this.attendees);
    this.attendees.sort((a: Attendee, b: Attendee) => {
      if (a && a.registerDate) {
        if (b && b.registerDate) {
      if (a == b) {
        return 0;
      } else  {
        return a.registerDate < b.registerDate ? -1:1;
      }
        } else {
          // no b -- sort lower
          return 1;
        }
      } else {
        // no a -- sort a lower
        return -1;

      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {Attendee} from '../model/attendee';
import {AttendeeService} from '../service/attendee-service';

const test = 
'[{"_id":"59e222260d938a14840fa611","id":null,"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111"},{"_id":"59e22260231b5526dc62aca2","id":null,"firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","zipPlusFour":"1111"},{"_id":"59e36043d326bb195495d6fa","firstName":"B","lastName":"B","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","id":"67ecb6e0-b1ab-11e7-80eb-292d5e7a1d8a","registerDate":"2017-10-15T13:18:59.918Z","formattedRegisterDate":"1:18:59 PM UTC"},{"_id":"59e3cbd6bf9e2531c49003fe","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-15T20:57:58.785Z"},{"_id":"59e3cf7633f25a0bdc2c71d4","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-15T21:13:26.051Z"},{"_id":"59e3cf7e33f25a0bdc2c71d5","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-15T21:13:34.503Z"},{"_id":"59e3e27dade5c5355c2ce55e","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-15T22:34:37.002Z"},{"_id":"59e3e29fade5c5355c2ce55f","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-15T22:35:11.515Z"},{"_id":"59e3e2baade5c5355c2ce560","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-15T22:35:38.920Z"},{"_id":"59e3e2bbade5c5355c2ce561","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-15T22:35:39.774Z"},{"_id":"59e3e2bcade5c5355c2ce562","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-15T22:35:40.461Z"},{"_id":"59e3f99be5d342126c074f70","firstName":"mike","lastName":"Suzio","address":"1416 Cherokee Ave","zipCode":"48067-3387","city":"Royal Oak","state":"MI","country":"US","registerDate":"2017-10-16T00:13:15.954Z"},{"_id":"59e3f9a4e5d342126c074f71","firstName":"mike","lastName":"Suzio","address":"1416 Cherokee Ave","zipCode":"48067-3387","city":"Royal Oak","state":"MI","country":"US","registerDate":"2017-10-16T00:13:24.813Z"},{"_id":"59e3f9d8e5d342126c074f72","firstName":"Michael","lastName":"Suzio","address":"1416 Cherokee Ave","zipCode":"48067-3387","city":"Royal Oak","state":"AR","country":"US","registerDate":"2017-10-16T00:14:16.342Z"},{"_id":"59e4b395a13656229c6479e4","firstName":"","lastName":"","address":"","registerDate":"2017-10-16T13:26:45.055Z"},{"_id":"59e4b3a3a13656229c6479e5","firstName":"","lastName":"","address":"","registerDate":"2017-10-16T13:26:59.269Z"},{"_id":"59e4b3aca13656229c6479e6","firstName":"Michael","lastName":"Suzio","address":"1416 Cherokee Ave","zipCode":"48067-3387","city":"Royal Oak","state":"MI","country":"US","registerDate":"2017-10-16T13:27:08.032Z"},{"_id":"59e4f95c7cffd13364996b0c","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-16T18:24:28.955Z"},{"_id":"59e4f9b97cffd13364996b0d","firstName":"Mike","lastName":"Suzio","address":"1 The Street","address2":"POBox 2","state":"AK","country":"US","zipCode":"90210","registerDate":"2017-10-16T18:26:01.510Z"}]';

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
    this.attendees = JSON.parse(test);
    // fetch list 
    // var temp: Attendee[];
    // this.attendeeService
    // .getAttendees().then((thoseGuys: Attendee[]) => {
    //     // this.attendees = thoseGuys.map((guy) => {
    //     //   return guy;
    //     // });
    //   });

    
    // // TODO - putting this in a pipe was troublesome -- fix that
    // // WTF? THIS IS UNDEFINED??
    // console.log("attendees list: " + this.attendees);
    this.attendees.sort((a: Attendee, b: Attendee) => {
      if (a && a.registerDate) {
        if (b && b.registerDate) {
          if (a == b) {
            return 0;
          } else  {
            return a.registerDate < b.registerDate ? 1:-1;
          }
        } else {
            // no b -- sort lower
            return 1;
          }
      } else {
        // no a -- sort a lower
        return -1;
      }
    });
  }
}

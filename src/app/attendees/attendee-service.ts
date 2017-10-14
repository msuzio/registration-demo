import { Injectable } from '@angular/core';
import { Attendee } from './attendee';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AttendeeService {
    private eventServiceURL = '/event/attendee';

    constructor (private http: Http) {}

    handleError(error) {
console.log(error);
    }

    // get("/api/Attendees")
    getAttendees(): Promise<void | Attendee[]> {
      return this.http.get(this.eventServiceURL)
                 .toPromise()
                 .then(response => response.json() as Attendee[])
                 .catch(this.handleError);
    }

    // post("/api/Attendees")
    registerAttendee(newAttendee: Attendee): Promise<void | Attendee> {
      return this.http.post(this.eventServiceURL, newAttendee)
                 .toPromise()
                 .then(response => response.json() as Attendee)
                 .catch(this.handleError);
    }
}
import { Injectable } from '@angular/core';
import { Attendee } from '../model/attendee';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AttendeeService {
    private eventServiceURL = '/event/attendee';

    constructor (private http: Http) {}

    handleError(error) {
        console.log(error);
    }

    // get("/api/attendees")
    getAttendees(): Promise<void | Attendee[]> {
        console.log("Fetching from " + this.eventServiceURL);
      return this.http.get(this.eventServiceURL)
                 .toPromise()
                 .then(response => response.json() as Attendee[])
                 .catch(this.handleError);
    }

    // post("/api/attendees")
    registerAttendee(newAttendee: Attendee): Promise<void | Attendee> {
      return this.http.post(this.eventServiceURL, newAttendee)
                 .toPromise()
                 .then(response => response.json() as Attendee)
                 .catch(this.handleError);
    }
}
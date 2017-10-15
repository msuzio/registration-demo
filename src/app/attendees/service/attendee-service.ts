import { Injectable } from '@angular/core';
import { Attendee } from '../model/attendee';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AttendeeService {
  private attendeeUrl = "/event/attendee";

    constructor (private http: Http) {}

    // get("/event/attendee")
    getAttendees(): Promise<void | Attendee[]> {
      return this.http.get(this.attendeeUrl)
                 .toPromise()
                 .then(response => response.json() as Attendee[])
                 .catch(this.handleError);
    }

    // post("/event/attendee")
    createAttendee(newAttendee: Attendee): Promise<void | Attendee> {
      return this.http.post(this.attendeeUrl, newAttendee)
                 .toPromise()
                 .then(response => response.json() as Attendee)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
  }
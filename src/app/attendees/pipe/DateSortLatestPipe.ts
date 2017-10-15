import { Pipe } from '@angular/core';
import {Attendee} from '../model/attendee';

@Pipe({
  name: "dateSortLatest"
})
// surprised I couldn't find a built-in pipe like this.
// Now that I've done it, should generalize for either ASC or DESC
export class DateSortLatestPipe {
  transform(array: Array<Attendee>, args: string): Array<Attendee> {
    
    array.sort((a: Attendee, b: Attendee) => {
      console.log ("a= " +a);
      console.log ("b= " +b);
      return a.registerDate.getMilliseconds() - b.registerDate.getMilliseconds();
    });
    return array;
  }
}
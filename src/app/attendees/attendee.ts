export class Attendee {
    // id and create date are optional; generated by save action on server
    _id?: string;
    register_date?: Date;
    firstname: string;
    lastname:string;
    address: string;
    address2: string;
    zip: string;
    city: string;
    state: string;
    country: string;

    phone: {
      mobile: string;
      work: string;
    }
}

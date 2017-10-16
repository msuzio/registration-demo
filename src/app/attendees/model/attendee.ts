export class Attendee {
    _id : string;
    registerDate: Date;
    firstName: string;
    lastName:string;
    address: string;
    address2: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;

    constructor(firstName: string, lastName: string, address: string, address2: string, zipCode: string, city:string, state: string, country: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.address2 = address2;
        this.zipCode = zipCode;
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

export class Attendee {
    public _id? : string;
    public registerDate? : Date;

    constructor(
        public firstName: string, 
        public lastName: string, 
        public address: string, 
        public zipCode: string, 
        public city:string, 
        public state: string, 
        public country: string,
        public address2: string
    ){};
}

import { v4 as uuidv4 } from 'uuid';

export class Comment {
    id: string;
    timestamp: Date;
    constructor(public message: string, public sender: string) {
        this.id = uuidv4();
        this.timestamp = new Date();
    }
}

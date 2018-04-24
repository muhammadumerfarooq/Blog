import { Answers } from './answers';
export class Blog {
    description: string;
    key: string;
    name: string;
    topic: string;
    tags: string[];
    date: Date;
    comments: Number;
    TotalAnswers: Answers[];
    location: string;

    setdescription(s: string): void {
        this.description = s;
    }
    getdescription(): string {
        return this.description;
    }
    setlocation(s: string): void {
        this.location = s;
    }
    getlocation(): string {
       return  this.location;
    }
    setkey(n: string): void {
        this.key = n;
    }
    getkey(): string {
        return this.key;
    }
    setname(n: string): void {
        this.name = n;
    }
    getname(): string {
        return this.name;
    }
    settopic(t: string): void {
        this.topic = t;
    }
    gettopic(): string {
        return this.topic;
    }
    settags(tag: string[]): void {
        this.tags = tag;
    }
    gettags(): string[] {
        return this.tags;
    }
    setdate(d: Date): void {
        this.date = d;
    }
    getdate(): Date {
        return this.date;
    }
    setcomments(coments: Number): void {
        this.comments = coments;
    }
    getcomments() {
        return this.comments;
    }
    settotalanswers(totalans: Answers[]) {
        this.TotalAnswers = totalans;
    }
    gettotalanswers() {
        return this.TotalAnswers;
    }
}

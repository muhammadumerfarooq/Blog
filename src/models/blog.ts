import { Answers } from './answers';
export class Blog {
    key: string;
    name: string;
    topic: string;
    tags: string[];
    date: string;
    comments: Number;
    TotalAnswers: Answers[];

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
    setdate(d: string): void {
        this.date = d;
    }
    getdate(): string {
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

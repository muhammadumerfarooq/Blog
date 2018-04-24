import { Injectable } from '@angular/core';
import { Answers } from '../models/answers';
import { AngularFireList } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { ForkJoinObservable } from 'rxjs/observable/ForkJoinObservable';
import { Blog } from '../models/blog';

@Injectable()
export class BlogsonkeyService {
  key: string;
  private dbPath = '/answers';
  bloggerRef: AngularFireList<Answers> = null;
  constructor(private db: AngularFireDatabase) {
    this.key = '';
  //  this.bloggerRef = db.list(this.dbPath + '/' + );

  }
  getanswers(): void {

  }
  getanswersonkey(k: string) {
    this.key = k;
    this.bloggerRef = this.db.list(this.dbPath + '/' + this.key);
  }

}

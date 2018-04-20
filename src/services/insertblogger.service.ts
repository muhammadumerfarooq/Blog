import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Blogger } from '../models/blogger';
import { Observable } from 'rxjs/observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { ForkJoinObservable } from 'rxjs/observable/ForkJoinObservable';

@Injectable()
export class InsertbloggerService {
  private dbPath = '/bloggers';
  bloggerRef: AngularFireList<Blogger> = null;
  constructor(private db: AngularFireDatabase) {
     this.bloggerRef = db.list(this.dbPath);

  }
  createBlogger(blogger: Blogger): Boolean {
    let list: any;
    console.log(blogger);
    list =  this.bloggerRef.push(blogger);
      try {
      forkJoin([list]).subscribe(results => {
        console.log('fork join ' + results);
      });

    } catch (err) {

    }
    finally {

    }
    return true;

  }
}

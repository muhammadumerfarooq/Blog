import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Blogger } from '../models/blogger';
import { Observable } from 'rxjs/observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { ForkJoinObservable } from 'rxjs/observable/ForkJoinObservable';
@Injectable()
export class RegisteruserService {
  private dbPath = '/bloggers';
  bloggerRef: AngularFireList<Blogger> = null;
 // items: Observable<any[]>;

  bloggerslist: Array<Blogger>;
  constructor(private db: AngularFireDatabase) {
    this.bloggerslist = new Array<Blogger>();
   //  this.bloggerslist.length = 0;
    this.bloggerRef = db.list(this.dbPath);
  //  this.items = db.list(this.dbPath).valueChanges();

  }
  getallbloggers(): Blogger[] {

try {
  this.bloggerslist.length = 0;
  console.log('in get all bloggers');
    this.bloggerRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(bloggers => {

      for (let i = 0; i < bloggers.length; i++) {
      // tslint:disable-next-line:prefer-const
      let bloggeritem = new Blogger();
          bloggeritem = bloggers[i];
          console.log(bloggeritem);
       this.bloggerslist.push(bloggeritem);
      }
      return this.bloggerslist;
    });
} catch ( err ) { }
/*    let list: any;
    list = this.bloggerslist;
    try {
    forkJoin([list]).subscribe(results => {
      console.log('fork join '  +  results);
      // results[0] is our character
      // results[1] is our character homeworld
     // results[0].homeworld = results[1];
      // this.loadedCharacter = results[0];
    });
  // console.log(this.bloggerlist);

   } catch (err) {
     console.log('error found ');

   }
  finally {

  }
*/
    return null;
  }
}

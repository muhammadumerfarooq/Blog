import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Blogger } from '../models/blogger';
import { InsertbloggerService } from '../services/insertblogger.service';
import { UpdatebloggerService } from '../services/updateblogger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   providers: [InsertbloggerService, UpdatebloggerService]
})
export class AppComponent {
     Active: Boolean;
   customerlist: AngularFireList<any> = null;
     blogger: Blogger = new Blogger();
      elem: string [];
  // public customer: Customer;
       title = 'app';

  constructor(private db: AngularFireDatabase, private insertblog: InsertbloggerService, private updateblogger: UpdatebloggerService) {

  this.blogger.name = 'umerfarooq';
  this.blogger.email = 'umerfarooq@nu.edu.pk';
  // tslint:disable-next-line:prefer-const
  this.elem = ['1', '2', '3', '4'];

  // insertblog.createBlogger(this.blogger);
   this.Active = true;
  // if ( updateblogger.updateblogger(this.blogger, { name: this.Active }) === true) {
  //   console.log('true find');
  // } else {
  // console.log('false find');
  // }
  }
  private handleError(error) {
    console.log('error ' + error);
    // alert.show(error);
    this.title = error;
  }
}

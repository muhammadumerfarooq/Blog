import { Component, OnInit } from '@angular/core';
import { Blogger } from '../../models/blogger';
import { RegisteruserService } from '../../services/registeruser.service';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Observable } from 'rxjs/observable';
import { InsertbloggerService } from '../../services/insertblogger.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  providers: [RegisteruserService]
})
export class RegistrationComponent implements OnInit {

  bloggerlist: Array<Blogger>;
  name: string;
  email: string;
  password: string;
  confirmpassword: string;
  constructor(private reguser: RegisteruserService, private insert: InsertbloggerService) {
    this.bloggerlist = new Array<Blogger>();
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmpassword = '';
    this.bloggerlist = this.reguser.getallbloggers();

}

  ngOnInit() {
  }
  onRegister() {
    this.bloggerlist = this.reguser.bloggerslist;
    let regcheck: boolean;
    // tslint:disable-next-line:prefer-const
    regcheck = false;
  if (this.name !== '' && this.email !== '' && this.confirmpassword !== '' && this.password !== '') {


  if (this.password === this.confirmpassword  && this.bloggerlist !== null) {
    for (let i = 0; i < this.bloggerlist.length; i++) {
          if (this.bloggerlist[i].email === this.email) {

            regcheck = true;
          }
    }
  }
  if (regcheck === false) {
    // tslint:disable-next-line:prefer-const
    let blogitem = new Blogger();
    blogitem.setname(this.name);
    blogitem.setemail(this.email);
    blogitem.setpassword(this.password);
    this.insert.createBlogger(blogitem);
    this.bloggerlist.length = 0;
    this.bloggerlist = this.reguser.getallbloggers();
  }
}

  }
}

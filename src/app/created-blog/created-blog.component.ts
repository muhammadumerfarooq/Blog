import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Blogger } from '../../models/blogger';
import { SharedserviceService } from '../../services/sharedservice.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-created-blog',
  templateUrl: './created-blog.component.html'
})
export class CreatedBlogComponent implements OnInit {
  public check: any = false;
  comments: string;
  totalcomments: number;
  showcomments: string;
  blog: Blog;
  @Output() bloglist = new EventEmitter<Blogger>();


  constructor(private shared: SharedserviceService) {
   // this.check = true;
    this.blog = new Blog();
    this.blog = this.shared.getblog();

    console.log('shared value ' + this.blog.gettopic());


    this.totalcomments = 0;
  }
  answeredpressed() {
  this.check = true;
  this.showcomments = this.comments;
  console.log(this.showcomments);
  this.comments = '';
  this.totalcomments =   this.addnumbers(this.totalcomments, 1);
  }
  ngOnInit() {
  }
addnumbers(fnum: number, snum: number) {
return (fnum + snum);
}
}

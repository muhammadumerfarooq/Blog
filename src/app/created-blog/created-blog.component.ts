import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Blogger } from '../../models/blogger';

@Component({
  selector: 'app-created-blog',
  templateUrl: './created-blog.component.html'
})
export class CreatedBlogComponent implements OnInit {
  @Output() bloglist = new EventEmitter<Blogger>();
  constructor() { }

  ngOnInit() {
  }

}

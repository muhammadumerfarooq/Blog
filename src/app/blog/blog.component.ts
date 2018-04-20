import { Component, OnInit } from '@angular/core';
import { Blogger } from '../../models/blogger';
import { Maps } from '../../models/maps';
import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit {
  safe: SafeResourceUrl;
  url: SafeResourceUrl;
  bloggerlist: Array<Blogger>;
  tagslist: Array<string>;
  title: string;
  question: string;
  descrption: string;
  tags: string;
  map: string;
  location: string;
  maps: string;
  mapslist: Array<Maps>;
  map_object: Maps;
  constructor(private sanitizer: DomSanitizer) {
  //  this.mapslist = new Array<Maps>();
    this.bloggerlist = new Array<Blogger>();
    this.tags = '';
    this.title = '';
    this.descrption = '';
    this.question = '';
    this.tagslist = new Array<string>();

    // tslint:disable-next-line:max-line-length
    this.map = '&key=AIzaSyCyP2TexHkARFI45ec1b9VEFwlNt2BdBPQ'; //
   // const m = '&key=AIzaSyCyP2TexHkARFI45ec1b9VEFwlNt2BdBPQ';
    this.location = ''; //
    const loc =  'https://www.google.com/maps/embed/v1/place?q=kashmir Hwy, Islamabad, Islamabad Capital Territory, Pakistan';
    this.maps = loc + this.map;
  //  this.map_object = new Maps(this.maps);
  //  this.mapslist.push(this.map_object);
    this.url = sanitizer.bypassSecurityTrustResourceUrl(this.maps);
    this.safe = sanitizer.bypassSecurityTrustResourceUrl(this.maps);

   }
   getlocation(): string {
     return this.map_object.location;
   }
  ngOnInit() {
    this.bloggerlist = new Array<Blogger>();
  //  this.bloggerlist = this.reguser.getallbloggers();
  }
  submitblog() {

  }
  GetIFrameUrl() {

  }
  locationpressed() {
    this.maps =  'https://www.google.com/maps/embed/v1/place?q=' + this.location + this.map;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.maps);
  }

  tagspressed() {
    let check  = true;
    for (let i = 0; i < this.tagslist.length ; i++) {
    //  console.log(this.tags + 'hi');
      if (this.tagslist[i] === this.tags || this.tags === '') {
        check = false;
      }
    }
    if (this.tags === '') {
      check = false;
    }
    if (check === true) {
      console.log(this.tags);
      this.tagslist.push(this.tags);
    }
    this.tags = '';
 // console.log(this.tags);

  }
}

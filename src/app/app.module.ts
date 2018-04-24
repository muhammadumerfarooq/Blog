import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InsertbloggerService } from '../services/insertblogger.service';
import { UpdatebloggerService } from '../services/updateblogger.service';
import { DeletebloggerService } from '../services/deleteblogger.service';
import { RegistrationComponent } from './registration/registration.component';
import { BlogComponent } from './blog/blog.component';
import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { StorageServiceModule } from 'angular-webstorage-service';
import { routing } from './app-routing.module';
// import { NativeScriptFormsModule } from '@angular/forms'
import { DatePipe } from '@angular/common';

import { BloggerslistService } from '../services/bloggerslist.service';
import { CreatedBlogComponent } from './created-blog/created-blog.component';
import { SharedserviceService } from '../services/sharedservice.service';
import { InsertblogService } from '../services/insertblog.service';
import { UpdateblogService } from '../services/updateblog.service';
import { InsertanswerService } from '../services/insertanswer.service';
import { BlogdataService } from '../services/blogdata.service';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { BlogsService } from '../services/blogs.service';
import { SeletedblogComponent } from './seletedblog/seletedblog.component';
import { BlogsonkeyService } from '../services/blogsonkey.service';
const firebaseConfig = {
    apiKey: 'AIzaSyCyP2TexHkARFI45ec1b9VEFwlNt2BdBPQ',
    authDomain: 'assessu-i14.firebaseapp.com',
    databaseURL: 'https://assessu-i14.firebaseio.com',
    projectId: 'assessu-i14',
    storageBucket: 'assessu-i14.appspot.com',
    messagingSenderId: '307897105182'
  };

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    BlogComponent,
    CreatedBlogComponent,
    AllBlogsComponent,
    SeletedblogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    StorageServiceModule,
    routing
  ],
  providers: [InsertbloggerService, UpdatebloggerService, InsertblogService,
    DeletebloggerService, BloggerslistService, SharedserviceService, UpdateblogService, InsertanswerService,
    BlogdataService, BlogsService, BlogsonkeyService],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatCheckboxModule]

})
export class AppModule { }

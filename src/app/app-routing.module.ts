import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { provideRoutes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { BlogComponent } from './blog/blog.component';
import { CreatedBlogComponent } from './created-blog/created-blog.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { SeletedblogComponent } from './seletedblog/seletedblog.component';
export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'user-login', pathMatch: 'full' },
    { path: 'user-login', component: RegistrationComponent },
    { path: 'create-blog', component: BlogComponent },
    { path: 'blog', component: CreatedBlogComponent },
    { path: 'allblogs', component: AllBlogsComponent },
   { path: 'selectedblog', component: SeletedblogComponent }


];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });


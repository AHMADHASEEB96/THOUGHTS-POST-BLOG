import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {path : '', component : HomeComponent },
 {path : 'category', component : SingleCategoryComponent},
 {path : 'post', component : SinglePostComponent},
 {path : 'about', component : AboutUsComponent },
 {path : 'contact', component : ContactUsComponent },
 {path : 'terms-conditions', component : TermsAndConditionsComponent },
];
// Now go to app.module.html and use the router outlet <router-outlet> </router-outlet> for router to work

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

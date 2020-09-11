import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';
import { PhotoFormComponent } from './photo/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListService } from './photo/photo-list/photo-list.service';
import { SigninComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignupComponent } from './home/signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListService
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

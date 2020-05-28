import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { CanProceedToContactsGuard } from './contacts/_guards/can-proceed-to-contacts.guard';
import { CanProceedToAboutGuard } from './about/_guards/can-proceed-to-about.guard';
import { CanProceedToHomeGuard } from './home/_guards/can-proceed-to-home.guard';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [CanProceedToHomeGuard]
  },
  {
    path:'contacts',
    component: ContactsComponent,
    canActivate: [CanProceedToContactsGuard]
  },
  {
    path:'about',
    component: AboutComponent,
    canActivate: [CanProceedToAboutGuard],
    children: [
      {
        path: 'me',
        component: AboutMeComponent
      },
      {
        path: 'us',
        component: AboutUsComponent
      }
    ]
  },
  {
    path:'**',
    component: NotFoundComponent,
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundModule)
  },
  {
    path:'error',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

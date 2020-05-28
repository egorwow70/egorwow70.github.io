import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GoalListModule } from './goal-list/goal-list.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { GoalListRoutingModule } from './goal-list/goal-list-routing.module';
import { AboutMeComponent } from './about/about-me/about-me.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { CanProceedToContactsGuard } from './contacts/_guards/can-proceed-to-contacts.guard';
import { CanProceedToAboutGuard } from './about/_guards/can-proceed-to-about.guard';
import { CanProceedToHomeGuard } from './home/_guards/can-proceed-to-home.guard';
import { NotFoundModule } from './not-found/not-found.module';
import { NotFoundRoutingModule } from './not-found/not-found-roating.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    AboutMeComponent,
    AboutUsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoalListModule,
    GoalListRoutingModule,
    AppRoutingModule,
    NotFoundModule,
    NotFoundRoutingModule
  ],
  providers: [
    CanProceedToContactsGuard,
    CanProceedToAboutGuard,
    CanProceedToHomeGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

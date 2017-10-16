import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AttendeeDetailsComponent } from './attendees/attendee-details/attendee-details.component';
import { AttendeeListComponent } from './attendees/attendee-list/attendee-list.component';
import { AttendeeRegisterComponent } from './attendees/attendee-register/attendee-register.component';

// const appRoutes: Routes = [
//   {
//     path: 'attendee/:id',
//     component:AttendeeDetailsComponent},
//   {
//     path: 'register',
//     component: AttendeeRegisterComponent,
//     data: { title: 'Event Registration'}
//   },
//   { path: 'report',
//   component: AttendeeListComponent
//   },
//   { path: '',
//     redirectTo: '/register',
//     pathMatch: 'full'
//   },
//   //{ path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    AttendeeDetailsComponent,
    AttendeeListComponent,
    AttendeeRegisterComponent
  ],
  imports: [
    //RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

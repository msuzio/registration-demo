import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { AttendeeDetailsComponent } from './attendees/attendee-details/attendee-details.component';
import { AttendeeListComponent } from './attendees/attendee-list/attendee-list.component';
import { AttendeeRegisterComponent } from './attendees/attendee-register/attendee-register.component';
import { FooterComponent } from './src/app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendeeDetailsComponent,
    AttendeeListComponent,
    AttendeeRegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

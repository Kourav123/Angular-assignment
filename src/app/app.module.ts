import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { MeetingManagementComponent } from './meeting-management/meeting-management.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientManagementComponent,
    MeetingManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

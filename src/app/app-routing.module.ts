import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';
import { MeetingManagementComponent } from './meeting-management/meeting-management.component';

const routes: Routes = [
  { path: 'client-management', component: ClientManagementComponent },
  { path: 'meeting-management', component: MeetingManagementComponent },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

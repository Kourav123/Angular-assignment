import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {
  clientName: string = '';
  clientEmail: string = '';
  clientAddress:string='';
  clientPassword: string='';
  clientRepeatPassword:string='';
  constructor(private router: Router) {}

  registerClient() {
    // Here, you can implement the logic to send the client data to the server using Angular HttpClient.
    // You can access the values like this.clientName and this.clientEmail.
    console.log('Client Name:', this.clientName);
    console.log('Client Email:', this.clientEmail);
      window.alert('Meeting registered successfully!'); // Show alert on successful registration

  }

  cancelRegistration() {
    // Implement the logic to cancel the registration here.
    console.log('Registration canceled.');
    window.alert('MeetingcancelRegistration  successfully!'); // Show alert on successful registration
   this.router.navigate(['/']); // Replace '/' with your homepage route if different

  }
}




import { Component } from '@angular/core';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent {
  clientName: string = '';
  clientEmail: string = '';

  registerClient() {
    // Here, you can implement the logic to send the client data to the server using Angular HttpClient.
    // You can access the values like this.clientName and this.clientEmail.
    console.log('Client Name:', this.clientName);
    console.log('Client Email:', this.clientEmail);
  }

  cancelRegistration() {
    // Implement the logic to cancel the registration here.
    console.log('Registration canceled.');

  }
}




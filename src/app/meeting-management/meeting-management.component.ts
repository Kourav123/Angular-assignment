import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-meeting-management',
  templateUrl: './meeting-management.component.html',
  styleUrls: ['./meeting-management.component.css']
})
export class MeetingManagementComponent {
  meetingTopic: string = '';
  numberOfPeople: string = '';
  meetingDatetime: string = '';
  constructor(private router: Router) {}
  registerMeeting() {
    // Implement the logic to send the meeting data to your server using Angular HttpClient.
    // You can access the values like this.meetingTopic, this.numberOfPeople, and this.meetingDatetime.
    console.log('Meeting Topic:', this.meetingTopic);
    console.log('Number of People:', this.numberOfPeople);
    console.log('Meeting Datetime:', this.meetingDatetime);
    window.alert('Meeting registered successfully!'); // Show alert on successful registration

    // You can make an HTTP request to your backend API to store the meeting data.
    // For example, you can use Angular's HttpClient to POST data to your server.
  }
  
  cancelRegistration() {
    // Implement the logic to cancel the registration here.
    console.log('Registration canceled.');
    window.alert('MeetingcancelRegistration  successfully!'); // Show alert on successful registration
   this.router.navigate(['/']); // Replace '/' with your homepage route if different

  }
}
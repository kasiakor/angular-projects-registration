import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registrationObject: any = {
    fullName: '',
    email: '',
    password: '',
    collegeName: '',
    role: '',
  };

  http = inject(HttpClient);

  onRegister() {
    alert('Register button clicked');
    debugger;
    this.http
      .post(
        'https://api.freeprojectapi.com/api/ProjectCompetition/register',
        this.registrationObject
      )
      .subscribe(
        (res: any) => {
          debugger;
          alert('Registration successful');
        },
        (error) => {
          console.error('Registration failed', error);
          alert('Error: ' + (error.error?.message || error.statusText));
        }
      );
  }
}

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  userService = inject(UserService);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    alert('Login button clicked');
    this.userService.onUserLogin(this.loginForm.value).subscribe(
      (res: any) => {
        debugger;
        alert('Login successful');
      },
      (error) => {
        console.error('Login failed', error);
        alert('Error: ' + (error.error?.message || error.statusText));
      }
    );
  }

  // using new syntax
  //   onLogin() {
  //   this.userService.onUserLogin(this.loginForm.value).subscribe({
  //     next: (res) => {
  //       alert('Login successful');
  //     },
  //     error: (error) => {
  //       console.error('Login failed', error);
  //       alert('Error: ' + (error.error?.message || error.statusText));
  //     },
  //   });
  // }
}

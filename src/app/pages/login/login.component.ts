import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  // inject router to navigate programmatically if needed
  router = inject(Router);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onLogin() {
    alert('Login button clicked');
    this.userService.onUserLogin(this.loginForm.value).subscribe(
      (res: any) => {
        console.log('Login response:', res);
        localStorage.setItem('studentId', res.userId);
        alert('Login successful');
        this.router.navigate(['/home']);
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  
  loginObj = {
    email: '',
    password: ''
  };
  signupObj ={
    username: '',
    email: '',
    password: ''
  }
  constructor(private http: HttpClient, private router: Router) {}

  onSignup(): void{
    this.http.post('http://localhost:8080/register', this.signupObj)
      .subscribe(
        response => {
          console.log(response);
          alert("signup done !")
        },
        error => {
          console.log(error);
         
        }
      );
  }
 
  onLogin(): void {
    this.http.post('http://localhost:8080/login', this.loginObj)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/send']);
          
        },
        error => {
          console.log(error);
        
        }
      );
  } 

}
 
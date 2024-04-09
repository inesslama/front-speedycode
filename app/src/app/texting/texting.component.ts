import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-texting',
  templateUrl: './texting.component.html',
  styleUrl: './texting.component.css'
})
export class TextingComponent {
  messageObj = {
    msg: ''
    
  };
 
  constructor(private http: HttpClient) {}

  
  onSubmit(): void {
    this.http.post('http://localhost:8080/send_message', this.messageObj)
      .subscribe(
        response => {
          console.log(response);
         
        },
        error => {
          console.log(error);
          // Handle error response here
        }
      );
  } 



}

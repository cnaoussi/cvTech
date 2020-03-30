import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
(response) => {
console.log('error',response);
},
(error) => {
  console.log('error',error);
  },
  () => {
    console.log('Complete :>');
  }

    )
    
  }
  

}

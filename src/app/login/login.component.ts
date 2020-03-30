import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../authentification.service';
import { Router } from '@angular/router';
// import { link } from 'fs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentification: AuthentificationService,
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  login(credentials){
    console.log(credentials);
    this.authentification.login(credentials).subscribe(
     (Response) => {
   const token = "test" //Response.id;
   const link = ['add'];
   localStorage.setItem('token',token);
   this.route.navigate(link);
     },
     (error) => {
       console.log(error);
     }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 username : string ="";
 password : string ="";

  constructor(private router : Router) {

   }

  ngOnInit() {
  }
  logIn(){
    this.router.navigate(['/realestates'])
  }
}
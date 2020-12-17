import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Key } from 'protractor';
import { Admin } from '../Model/admin';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  Admin =new Admin();
  msg='';

  constructor(private router:Router)
  {}
  public username: string ;
  public password: string ;
   isUsernameValid: boolean = true;
   error: any = null;
    ngOnInit(){}

 login():void
 {
     if(this.Admin.username==="shubhangi" && this.Admin.password==="shubh")
      {
       alert("Login successfully..!");
       this.router.navigate(['restaurant']);
       alert("Welcome......");
      }
      else
      {
          alert("Invalid inputs..!");
          alert("Please enter valid user name and password...!");
      }   
 }
  
//   constructor(private _service:AdminService,private _router:Router) { }
//   ngOnInit(): void {
//   }
//  loginAdmin()
// {
// console.log("Login button"+this.Admin.username);
// console.log("Login button"+this.Admin.password);

// this._service.loginAdminFromRemote(this.Admin).subscribe(
//   data =>{ 
//     console.log("Responce received")
//     sessionStorage.setItem("user",JSON.stringify(this.Admin.username));
//     this._router.navigate(["restaurant"]);
//     },
//   error =>{
//      console.log("Exception occured"+error)
//      this.msg="please enter valid Username / password";  
//     }
//   );


}
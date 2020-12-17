import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zonions';
  flag:any=null;
  constructor()
  {
   this.flag=sessionStorage.getItem("user");
  }
  }

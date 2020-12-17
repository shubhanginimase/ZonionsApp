import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();
  submitted = false;

  open={hour:20,minute:20};
  close={hour:20, minute:20};

  constructor(private  restaurantservice: RestaurantService,
    private router: Router) { }

  ngOnInit() {
  }

  newRestaurant(): void {
    this.submitted = false;
    this.restaurant = new Restaurant();
  }

  save() {
    console.log("in saves");
    console.log(this.restaurant);
    this.restaurantservice
    .createRestaurant(this.restaurant).subscribe(data => {

      alert(JSON.stringify(this.restaurant));
      this.restaurant = new Restaurant();
      this.List();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.restaurant.open_time=this.open.hour+"."+this.open.minute;
    this.restaurant.close_time=this.close.hour+"."+this.close.minute;
    this.submitted = true;
    this.save();    
  }

  List() {
    this.router.navigate(['restaurant']);
  }
 
}

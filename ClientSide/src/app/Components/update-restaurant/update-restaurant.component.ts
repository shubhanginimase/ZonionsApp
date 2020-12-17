import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  
  rest_id:number;
  restaurant:Restaurant;

  open={hour:20,minute:20};
  close={hour:20, minute:20};

  constructor(private route: ActivatedRoute,private router: Router,
    private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.restaurant=new Restaurant();

    this.rest_id = this.route.snapshot.params['restid'];
    
    this.restaurantService.getRestaurant(this.rest_id)
      .subscribe(data => {
        this.restaurant = data;
      }, error => console.log(error));
  }

  updateRestaurant() {
    
    this.restaurantService.updateRestaurant(this.rest_id, this.restaurant)
      .subscribe(data => {
        console.log("update :"+data);
        console.log("Update component restid :"+this.rest_id);
        this.restaurant = new Restaurant();
        this.List();
      }, error => console.log(error));
  }

  onSubmit() {
    this.restaurant.open_time=this.open.hour+"."+this.open.minute;
    this.restaurant.close_time=this.close.hour+"."+this.close.minute;
    this.updateRestaurant();    
  }

  List() {
    this.router.navigate(['restaurant']);
  }
}

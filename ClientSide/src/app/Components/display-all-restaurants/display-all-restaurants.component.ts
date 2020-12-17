import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-display-all-restaurants',
  templateUrl: './display-all-restaurants.component.html',
  styleUrls: ['./display-all-restaurants.component.css']
})
export class DisplayAllRestaurantsComponent implements OnInit {
  restaurants: Observable<Restaurant[]>;
  rest=new Restaurant();
  constructor(private restaurantService: RestaurantService,
    private router: Router) {}

  ngOnInit() {
    this.detailsReload();
  }

  detailsReload() {
    this.restaurants = this.restaurantService.getAllRestaurant();
  }

  deleteRestaurant(rest_id: number) {
      console.log("Delete restid :"+rest_id)
    this.restaurantService.deleteRestaurant(rest_id)
      .subscribe(
        data => {
          console.log(data);
          this.detailsReload(); 
        },
        error => console.log(error)); 
  }
 
  restaurantDetails(restid: number){
    this.router.navigate(['restDetails', restid]);
  }
 
  updateRestaurant(restid: number){
     this.router.navigate(['restUpdate', restid]);
  }
  createRestaurant(restaurant:Restaurant)
  { 
    this.router.navigate(['add', restaurant]);
  }

  restaurantList(){
    this.router.navigate(['default']);
  }
}

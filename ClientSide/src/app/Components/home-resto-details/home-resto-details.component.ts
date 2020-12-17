import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-home-resto-details',
  templateUrl: './home-resto-details.component.html',
  styleUrls: ['./home-resto-details.component.css']
})
export class HomeRestoDetailsComponent implements OnInit {
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

  deleteRestaurant(restid: number) {
    
    this.restaurantService.deleteRestaurant(restid)
      .subscribe(
        data => {
          console.log(data);
          this.detailsReload();
        },
        error => console.log(error));
  }

  restaurantDetails(rest_id: number){
         //this.restaurants = this.restaurantService.getRestaurant(rest_id);
    this.router.navigate(['restDetails', rest_id]);
  }

}

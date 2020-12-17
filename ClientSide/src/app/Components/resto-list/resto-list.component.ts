import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';


@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.css']
})
export class RestoListComponent implements OnInit {

  restaurants: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.restaurants = this.restaurantService.getAllRestaurant();
  }

  deleteRestaurant(rest_id: number) {

    this.restaurantService.deleteRestaurant(rest_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  } 
  
  restaurantDetails(restid: number){
    this.router.navigate(['restDetails', restid]);
  }
 
  updateRestuarant(rest_id: number){
    console.log("Update restID :"+rest_id);
    this.router.navigate(['restUpdate', rest_id]);
  }
}

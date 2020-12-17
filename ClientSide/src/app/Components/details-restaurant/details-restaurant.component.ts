import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/Model/restaurant';
import { RestaurantService } from 'src/app/Services/restaurant.service';

@Component({
  selector: 'app-details-restaurant',
  templateUrl: './details-restaurant.component.html',
  styleUrls: ['./details-restaurant.component.css']
})
export class DetailsRestaurantComponent implements OnInit {

  rest_id:number;
  restaurant: Restaurant;

  constructor(private route: ActivatedRoute,private router: Router,
    private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurant = new Restaurant();

    this.rest_id = this.route.snapshot.params['restid'];
    
    this.restaurantService.getRestaurant(this.rest_id)
      .subscribe(data => {
        this.restaurant = data;
      }, error => console.log(error));
  }

  restaurantList(){
    this.router.navigate(['default']);
  }

}

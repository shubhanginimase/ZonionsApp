import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService 
{
  private baseurl ="http://localhost:8081/restaurants";
 
  constructor(private http: HttpClient) { }

  getRestaurant(rest_id: number): Observable<any>
   {
    return this.http.get(this.baseurl+'/'+rest_id);
   }

  createRestaurant(restaurant: Object): Observable<Object> 
  {
   //alert("in create rest..."+open_time);
    return this.http.post(this.baseurl, restaurant);
  }

  updateRestaurant(rest_id: number, value: any): Observable<Object> 
  {
     return this.http.put(this.baseurl+'/'+rest_id,value);
  }

  deleteRestaurant(rest_id: number): Observable<any> 
  {
    return this.http.delete(this.baseurl+'/'+rest_id, { responseType: 'text' });
  
  
  }

  getAllRestaurant(): Observable<any>
   {
        return this.http.get(this.baseurl);
  }
}

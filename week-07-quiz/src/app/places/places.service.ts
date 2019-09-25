import { Injectable } from '@angular/core';
import { model_Places } from "./places.model";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: model_Places[] = [
    new model_Places(
      'p1',
      'Basket',
      'Basket adalah UKM blabla bla...',
      'data:image/jpeg;base64,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',
      700000000
    ),
    new model_Places(
      'p2',
      'Drama',
      'Drama adalah UKM blabla bla...',
      'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123853_wh_3',
      1000000000
    ),
    new model_Places(
      'p3',
      'Volly',
      'Volly adalah UKM blabla bla...',
      'https://s.kaskus.id/r480x480/images/fjb/2016/06/28/treepark_serpong_apartment_at_bsd_city_by_pohon_group__sudah_topping_off_4536243_1467123582.jpg',
      9999999
    ),
    new model_Places(
      'p3',
      'Futsal',
      'Futsal adalah UKM blabla bla...',
      'https://s.kaskus.id/r480x480/images/fjb/2016/06/28/treepark_serpong_apartment_at_bsd_city_by_pohon_group__sudah_topping_off_4536243_1467123582.jpg',
      9999999
    )
  ]

  getAllPlaces(){
    return [...this.places];
  }

  service_getPlace(placeId: string){
    return{
      ...this.places.find(places => {
        return places.id === placeId;
      })
    }
  }

  service_deletePlace(placeId: string){
    this.router.navigate(['/offers']);
    return this.places.splice(parseInt(placeId),1)
  }

  constructor(private router: Router) { }
}

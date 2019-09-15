import { Component, OnInit } from '@angular/core';
import { model_Places } from '../places.model';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  arr_Places: model_Places[];

  constructor(private service_Places: PlacesService, private router: Router) { }

  ngOnInit() {
    this.arr_Places = this.service_Places.getAllPlaces();
  }

  editOffer(id: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
  }
}

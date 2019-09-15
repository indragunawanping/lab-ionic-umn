import { Component, OnInit } from '@angular/core';
import { model_Places } from '../places.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  arr_Places: model_Places[];

  constructor(private service_Places: PlacesService) { }

  ngOnInit() {
    this.arr_Places = this.service_Places.getAllPlaces();
  }
}

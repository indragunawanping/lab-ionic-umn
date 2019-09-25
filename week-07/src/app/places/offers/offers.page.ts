import { Component, OnInit } from '@angular/core';
import { model_Places } from '../places.model';
import { PlacesService } from '../places.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  arr_Places: model_Places[];

  constructor(private router: Router, private service_Places: PlacesService) { }

  ngOnInit() {
    this.arr_Places = this.service_Places.getAllPlaces();
  }

  deleteBookings(bookingsId: string){
    this.service_Places.service_deletePlace(bookingsId);
    this.arr_Places = this.service_Places.getAllPlaces();
  }
}

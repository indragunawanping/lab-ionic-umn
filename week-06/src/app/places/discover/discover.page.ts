import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { model_Places } from '../places.model';
import { SegmentChangeEventDetail } from '@ionic/core';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  arr_Places: model_Places[];
  listedLoadedPlaces: model_Places[];

  constructor(private service_Places: PlacesService) { }

  ngOnInit() {
    // this.arr_Places = this.service_Places.getAllPlaces();
    this.arr_Places = this.service_Places.getAllPlaces();
    this.listedLoadedPlaces = this.arr_Places.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail)
  }
}

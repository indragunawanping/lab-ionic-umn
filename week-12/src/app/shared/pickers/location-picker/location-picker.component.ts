import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapModelComponent } from '../../map-model/map-model.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PlaceService } from 'src/app/home/place.service';
import { environment as ENV } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private http: HttpClient, private placeSvc: PlaceService) { }

  ngOnInit() {}

  async onPickLocation(){
    const modal = await this.modalCtrl.create({
      component: MapModelComponent
    });
    modal.onDidDismiss().then((modalData) => {
      console.log(modalData.data);
      this.getAddress(modalData.data.lat, modalData.data.lng).subscribe(
        (address) => {
          this.placeSvc.setAddress(address);
          console.log(address);
        }
      )
    });
    return await modal.present()
  }

  private getAddress(lat: number, lng:number){
    return this.http.get<any>(
        'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + ENV.mapsAPIKey
      )
      .pipe(
        map(geoData => {
          if(!geoData || !geoData.results || !geoData.results.length) {
            return null;
          }
          return geoData.results[0].formatted_address;
        })
      )
  }
}

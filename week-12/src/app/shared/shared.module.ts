import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { MapModelComponent } from './map-model/map-model.component';
import { IonicModule } from '@ionic/angular';
import { environment as ENV } from 'src/environments/environment';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [LocationPickerComponent, MapModelComponent],
  imports: [
    CommonModule, 
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: ENV.mapsAPIKey
    })  
  ],
  exports: [LocationPickerComponent, MapModelComponent],
  entryComponents: [MapModelComponent]
})
export class SharedModule { }

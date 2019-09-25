import { Component, OnInit } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { model_Places } from '../places.model';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  arr_Places: model_Places[];

  constructor(public alertController: AlertController, private service_Places: PlacesService) { }

  ngOnInit() {
    this.arr_Places = this.service_Places.getAllPlaces();
  }
  
  page_join(){
    this.service_getAlert();
  }

  async service_getAlert(){
    const alert = await this.alertController.create({
      header: 'Beneran Mau Join?',
      buttons: [
        {
          text: 'YES',
          // handler: () => this.recipesService.service_deleteRecipe(this.loadedRecipe.id)
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }
}

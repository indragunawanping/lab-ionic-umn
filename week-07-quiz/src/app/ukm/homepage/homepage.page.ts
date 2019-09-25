import { Component, OnInit } from '@angular/core';
import { ukmClass } from '../ukm.model';
import { UkmService } from '../ukm.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {
  loadedUkm: ukmClass[];
  selectedUkm: ukmClass;


  constructor(public alertController: AlertController, private ukmService: UkmService) { }

  ngOnInit() {
    this.loadedUkm = this.ukmService.ukm;
  }

  joinAlert(data){
    this.joinGetAlert(data);
  }

  async joinGetAlert(data){
    const alert = await this.alertController.create({
      header: 'Beneran Mau Join?',
      buttons: [
        {
          text: 'YES',
          handler: () => this.ukmService.addToMyUkm(data)
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

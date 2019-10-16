import { Component, OnInit } from '@angular/core';
import { Venues } from '../venue.model';
import { VenueService } from '../venue.service';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.page.html',
  styleUrls: ['./browse.page.scss'],
})
export class BrowsePage implements OnInit {
  arr_Venue : Venues[];

  constructor(private venueService: VenueService, public alertController: AlertController,
    public loadingCtrl:LoadingController, private modalCtrl: ModalController, private toastController: ToastController) { }

  ngOnInit() {
    this.arr_Venue = this.venueService.getAllVenue();
  }

  joinAlert(data){
    this.joinGetAlert(data);
  }

  async joinGetAlert(data){
    const alert = await this.alertController.create({
      header: 'Book Venue',
      message: 'Are you sure want to book this venue?',
      buttons: [
        {
          text: 'YES',
          handler: () => {
            this.loading(),
            this.venueService.addToMyBooking(data)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

 async loading(){
   const loading = await this.loadingCtrl.create({
     message: 'Booking this avenue...',
     duration: 1000
   });
   await loading.present();
   const { role, data } = await loading.onDidDismiss();
   console.log('Loading dismissed')
   this.presentToast();
 }

 async presentToast() {
  // const toastController = document.querySelector('ion-toast-controller');

  const toast = await this.toastController.create({
    message: 'Congratulations, your booking has been successfully made.',
    duration: 2000
  });
  return await toast.present();
}
}

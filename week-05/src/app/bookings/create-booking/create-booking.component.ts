import { Component, OnInit, Input } from '@angular/core';
import { model_Places } from 'src/app/places/places.model';
import { PlacesService } from 'src/app/places/places.service';
import { LoadingController, ModalController, ActionSheetController } from '@ionic/angular';
import { actionSheetController } from '@ionic/core';
import { timeout } from 'q';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  arr_Places: model_Places[];

  @Input() selectedPlace: model_Places;
  
  constructor(private service_Places: PlacesService,private modalCtrl: ModalController,
    private loadingCtrl: LoadingController, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.arr_Places = this.service_Places.getAllPlaces();
  }

  onCancel(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  async onBookPlace(){
    // this.isLoading = true;
    const actionsheet = await this.actionSheetCtrl.create({
      header: 'Book Place',
      buttons: [{
      text: 'Book w/ Random Date',
      handler: () => {
        this.modalCtrl.
          create({ component: CreateBookingComponent,
          componentProps: { selectedPlace: this.arr_Places } 
        })
        .then(modalElement => {
          modalElement.present();
          return modalElement.onDidDismiss();
        })
        .then(resultData => {
          console.log(resultData.data, resultData.role);
          if(resultData.role === 'confirm'){
            console.log('BOOKED');
          }
        });
        this.bookPlace();
        this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
      }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionsheet.present();
  }

  bookPlace(){
    this.loadingCtrl.create({
      keyboardClose: true,
      message: 'Booking the place ...'
    })
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        loadingEl.dismiss();
        this.modalCtrl.dismiss({ message: 'booked!' },
        'confirm');
      }, 2000);
    });
  }
}





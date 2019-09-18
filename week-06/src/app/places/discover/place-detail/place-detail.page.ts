import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { model_Places } from '../../places.model';
import { NavController, ModalController, LoadingController, ActionSheetController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: model_Places;
  constructor(
    private router: Router,
    private service_Places: PlacesService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController){
  }

  arr_Places: model_Places[];

  ngOnInit() {
    this.arr_Places = this.service_Places.getAllPlaces();
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.service_getPlace(paramMap.get('placeId'));
    });
  }

  goBack(){
    this.router.navigateByUrl('/places/tabs/discover');
  }

  bookPlace(){
    this.modalCtrl.
    create({ component: CreateBookingComponent,
            componentProps: { selectedPlace: this.place }
      })
      .then(modalElement => {
        modalElement.present();
      });
  }

  onBookPlace(){
    this.actionSheetCtrl.create({
      header: 'Choose an Action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })
    .then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

  openBookingModal(mode: 'select' | 'random'){
    console.log(mode);
    this.modalCtrl
    .create({
      component: CreateBookingComponent,
      componentProps: { selectedPlace: this.place }
    })
    .then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData, resultData.role);
      if(resultData.role === 'confirm'){
        console.log('BOOKED');
      }
    })
  }
}





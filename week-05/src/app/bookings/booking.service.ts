import { Injectable } from '@angular/core';
import { modelBookings } from './bookings.model';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  var_bookings: modelBookings;
  private arr_bookings: modelBookings[] = [
    new modelBookings(
      'bs1',
      'p1',
      'u1',
      'Serpong M-Town',
      7
    ),
    new modelBookings(
      'bs2',
      'p2',
      'u2',
      'Scientia Residence',
      9
    ),
    new modelBookings(
      'bs3',
      'p3',
      'u3',
      'BSD Apartment',
      5
    )
  ]

  getAllBookings(){
    return [...this.arr_bookings];
  }

  constructor(private router: Router, private toastController: ToastController) { }

  service_deleteBookings(bookingsId: string){
    this.router.navigate(['/bookings']);
    this.presentToast();
    return this.arr_bookings.splice(parseInt(bookingsId),1)
    // this.arr_bookings = this.arr_bookings.filter(bookings => {
    //   return bookings.id !== bookingsId;
    // })
    // console.log("booksId"+bookingsId)
  }

  async presentToast() {
    // const toastController = document.querySelector('ion-toast-controller');
  
    const toast = await this.toastController.create({
      message: 'Your bookings has been deleted.',
      duration: 2000
    });
    return await toast.present();
  }
}

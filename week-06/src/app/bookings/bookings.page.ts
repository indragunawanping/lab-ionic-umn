import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { model_Places } from '../places/places.model';
import { BookingService } from './booking.service';
import { modelBookings } from './bookings.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  arr_Bookings: modelBookings[];
  
  constructor(private service_Bookings: BookingService) { }

  ngOnInit() {
    this.arr_Bookings = this.service_Bookings.getAllBookings();
  }

  ionViewDidEnter(){
    this.arr_Bookings = this.service_Bookings.getAllBookings();
  }

  deleteBookings(bookingsId: string){
    this.service_Bookings.service_deleteBookings(bookingsId);
    this.arr_Bookings = this.service_Bookings.getAllBookings();
  }
}

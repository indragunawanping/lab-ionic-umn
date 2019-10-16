import { Component, OnInit } from '@angular/core';
import { Venues } from '../venue.model';
import { VenueService } from '../venue.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  loadedBooking: Venues[];
  myBooking: Venues[];

  constructor(private venueService: VenueService) { }

  ngOnInit() {
    //this.loadedBooking = this.venueService.booking;
    this.myBooking = this.venueService.getMyBooking();
    console.log('myUkm'+this.myBooking)
  }

  ionViewWillEnter(){
    this.myBooking = this.venueService.getMyBooking();
    console.log(this.myBooking);
  }

  onCancelMyBooking(id: string){
    console.log('id'+id)
    this.venueService.removeFromMyBooking(id);
    this.myBooking = this.venueService.getMyBooking();
  }

  onCancel(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    // cancel booking with id offerId
  }
}

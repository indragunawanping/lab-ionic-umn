import { Injectable } from '@angular/core';
import { Venues } from './venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  private venues: Venues[] = [
    new Venues(
      'v1',
      'Galaxy Futsal',
      'https://kemananihh.files.wordpress.com/2015/01/353401_taraflexgalaxy.jpg?w=459&h=344',
      'Ancol, DKI Jakarta',
      'Futsal'
    ),
    new Venues(
      'v2',
      'Cihuni',
      'https://serpongku.com/wp-content/uploads/2018/03/villa-melati-mas.jpg',
      'Serpong, Banten',
      'Badminton'
    ),
    new Venues(
      'v3',
      'Ben\'s Stadium',
      'http://www.streetdirectory.co.id/stock_images/travel/show_resize_image.php?imageId=ind_13360389580293&w=320&h=240',
      'Bogor, Jawa Barat',
      'Futsal'
    ),
    new Venues(
      'v4',
      'Candra Wijaua Intl. Badminton Center',
      'https://serpongku.com/wp-content/uploads/2018/03/chandra.jpg',
      'Serpong, Banten',
      'Badminton'
    )
  ]

  private myVenue: Venues[] = [];

  constructor() { }

  getAllVenue(){
    return [...this.venues];
  }

  addToMyBooking(b: Venues){
    this.myVenue.push(b)
    console.log(this.myVenue)
  }

  removeFromMyBooking(id: string){
    this.myVenue = this.myVenue.filter(u => {
      console.log(id)
      console.log(u.id)
      return u.id !== id;
    });
  }

  getMyBooking(){
    return [...this.myVenue];
  }

  get booking(){
    return[...this.venues];
  }
}

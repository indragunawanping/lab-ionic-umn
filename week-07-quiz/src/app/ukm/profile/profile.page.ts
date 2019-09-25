import { Component, OnInit } from '@angular/core';
import { ukmClass } from '../ukm.model';
import { UkmService } from '../ukm.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loadedUkm: ukmClass[];
  myUkm: ukmClass[];

  constructor(private ukmService: UkmService) { }

  ngOnInit() {
    this.loadedUkm = this.ukmService.ukm;
    this.myUkm = this.ukmService.getMyUkm();
    console.log('myUkm'+this.myUkm)
  }

  ionViewWillEnter(){
    this.myUkm = this.ukmService.getMyUkm();
    console.log(this.myUkm);
  }

  onCancelMyUkm(id: string){
    console.log('id'+id)
    this.ukmService.removeFromMyUkm(id);
    this.myUkm = this.ukmService.getMyUkm();
  }

  onCancel(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    // cancel booking with id offerId
  }

}

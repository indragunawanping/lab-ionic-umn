import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { PlaceService } from './place.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  address = '';

  constructor(private placeSvc: PlaceService) {}

  ngOnInit(){
    this.placeSvc.getAddress().subscribe(
      currAddress => {
        this.address = currAddress;
      }
    )
  }

}

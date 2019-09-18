import { Component, OnInit, Input } from '@angular/core';
import { model_Places } from '../../places.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {
  @Input() offer: model_Places;
  constructor() { }

  ngOnInit() {}

  getDummyDate(){
    return new Date();
  }

}

import { Injectable } from '@angular/core';
import { ukmClass } from './ukm.model';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UkmService {
  private ukmModel: ukmClass[] = [
    new ukmClass(
      'u1',
      'Obscura',
      'bla bla bla'
    ),
    new ukmClass(
      'u2',
      'Qorie',
      'bla bla bla'
    ),
    new ukmClass(
      'u3',
      'Ultima Sonora',
      'bla bla bla'
    ),
    new ukmClass(
      'u4',
      'GDC',
      'bla bla bla'
    ),
    new ukmClass(
      'u5',
      'Basket',
      'bla bla bla'
    ),
  ];

  private myUkm: ukmClass[] = [];

  constructor() { }

  addToMyUkm(u: ukmClass){
    this.myUkm.push(u)
    console.log(this.myUkm)
  }

  removeFromMyUkm(id: string){
    this.myUkm = this.myUkm.filter(u => {
      return u.id !== id;
    });
  }

  getMyUkm(){
    return [...this.myUkm];
  }

  get ukm(){
    return[...this.ukmModel];
  }

  
}

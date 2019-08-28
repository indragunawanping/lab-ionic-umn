import { Injectable } from '@angular/core';
import { mod_Recipe } from './recipe.model';
import { Component } from '@angular/core';
import { AlertController, ToastController} from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private var_recipe: mod_Recipe[]= [
    {
      id: 'r1',
      title: 'Gado-Gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/05/gado-gado-salad.jpg',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://cdn.idntimes.com/content-images/post/20190502/c22eb92d2d3738702fb0434e339cfbca-1-b9b0ec35aa17b97860c72fe047cd216d_600x400.jpg',
      ingredients: ['Nasi']
    },
    {
      id: 'r3',
      title: 'Pizza Margareta',
      imageUrl: 'https://img.taste.com.au/A0DCNELv/taste/2016/11/jessica-39581-2.jpeg',
      ingredients: ['Pizza Dough', 'Olive Oil', 'Garlic', 'Tomato Sauce', 'Mozzarella Cheese']
    }
  ];

  constructor( private router: Router, public toastController: ToastController){ }

  getAllRecipe(){
    return [...this.var_recipe];
  }

  service_getRecipe(recipeId: string){
    return{
      ...this.var_recipe.find(var_recipe => {
        return var_recipe.id === recipeId;
      })
    }
  }

  service_deleteRecipe(recipeId: string){
    this.var_recipe = this.var_recipe.filter(recipe => {
      return recipe.id !== recipeId;
    })
    this.router.navigate(['/recipe']);
    this.presentToast();
    //return this.var_recipe.splice(parseInt(recipeId),1)
  }

  async presentToast() {
    // const toastController = document.querySelector('ion-toast-controller');
  
    const toast = await this.toastController.create({
      message: 'Your recipe has been deleted.',
      duration: 2000
    });
    return await toast.present();
  }
}




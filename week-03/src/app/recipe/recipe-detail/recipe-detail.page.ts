import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mod_Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})

export class RecipeDetailPage implements OnInit {
  loadedRecipe: mod_Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipeService,
   public alertController: AlertController){ }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe(
      paramMap => {
        if(!paramMap.has('recipeId')) { return; }
        this.loadedRecipe = this.recipesService.service_getRecipe(paramMap.get('recipeId'));
      }
    );
  }

  page_deleteRecipe(){
    
    this.service_getAlert();
    
  }

  async service_getAlert(){
    const alert = await this.alertController.create({
      header: 'Delete Recipe',
      message: 'Are you sure you want to delete this recipe?',
      buttons: [
        {
          text: 'YES',
          handler: () => this.recipesService.service_deleteRecipe(this.loadedRecipe.id)
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

}

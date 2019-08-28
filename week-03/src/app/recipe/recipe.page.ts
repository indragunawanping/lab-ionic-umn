import { Component, OnInit } from '@angular/core';
import { mod_Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  arr_recipe: mod_Recipe[];
  var_recipe: mod_Recipe;

  constructor(private recipesService: RecipeService) { }
  
  ngOnInit() {
    this.arr_recipe = this.recipesService.getAllRecipe();
  }

  ionViewDidEnter(){
    this.arr_recipe = this.recipesService.getAllRecipe();
  }

  page_getRecipe(recipeId: string){
    this.var_recipe = this.recipesService.service_getRecipe(recipeId);
    console.log(this.var_recipe)
  }

  page_deleteRecipe(recipeId: string){
    this.recipesService.service_deleteRecipe(recipeId);
    this.arr_recipe = this.recipesService.getAllRecipe();
    console.log(recipeId)
  }
}

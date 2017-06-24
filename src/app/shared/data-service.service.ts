import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService){}

  storeRecipes(){
    const token = this.authService.getToken();
    return this.http.put('https://recipes-book-47236.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes(){

    const token = this.authService.getToken();

    this.http.get('https://recipes-book-47236.firebaseio.com/recipes.json?auth=' + token)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for(let recipe of recipes){
          // Make sure there will be an array of ingredients ([]) to prevent Errors
          if(!recipe['ingredients']){
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe []) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}

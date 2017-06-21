import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

  recipesChanged = new Subject<Recipe[]>();

  private recipes : Recipe[]= [
    new Recipe('Sweet Bread',
    'Sweet Bread is super tasty, what else do we need to say?',
    'http://static.kidspot.com.au/cm_assets/84573/turkey-and-almonds-parcels-jpg-20150309014426-q75dx720y432u1r1ggc-20160208103217.jpg~q75,dx720y432u1r1gg,c--.jpg',
    [
      new Ingredient('Fluor',250),
      new Ingredient('Yeast',15),
      new Ingredient('Salt',5)
    ]
  )
    ,new Recipe('Salmon with lemon',
    'Salmon with lemon is super tasty, what else do we need to say?',
    'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
    [
      new Ingredient('Salmon',800),
      new Ingredient('Lemon',1),
      new Ingredient('Salt',2)
    ]
  )
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice(); //this will return a new instance of recipes, not the original one
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient []){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newrecipe: Recipe){
    this.recipes[index] = newrecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken', 'This is how u make a chicken',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('Pork', 'This is how u make a pork',
      'https://panlasangpinoy.com/wp-content/uploads/2018/01/Lechon-Belly-Pork-Adobo-Recipe-266x160.jpg?x28997')
  ];
  constructor() { }

  ngOnInit() {
  }

}

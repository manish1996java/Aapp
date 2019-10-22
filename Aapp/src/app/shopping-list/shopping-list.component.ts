import { Component, OnInit } from '@angular/core';
import { Ingredent } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredent[] = [
    new Ingredent('Apples',5),
    new Ingredent('tomato',6),
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredentAdd(ingredient:Ingredent){
  
    this.ingredients.push(ingredient);
  }

}

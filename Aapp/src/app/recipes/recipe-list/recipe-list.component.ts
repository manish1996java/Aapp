import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test Recipe','this is simple test','https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/3/7/3/CCKEL301_sesame-ginger-chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1532967448598.jpeg'),
    new Recipe('test Recipe','this is simple test','https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/3/7/3/CCKEL301_sesame-ginger-chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1532967448598.jpeg'),
    new Recipe('test Recipe','this is simple test','https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/3/7/3/CCKEL301_sesame-ginger-chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1532967448598.jpeg'),
    new Recipe('test Recipe','this is simple test','https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/3/7/3/CCKEL301_sesame-ginger-chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1532967448598.jpeg'),
    new Recipe('test Recipe','this is simple test','https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/3/7/3/CCKEL301_sesame-ginger-chicken_s4x3.jpg.rend.hgtvcom.616.462.suffix/1532967448598.jpeg'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecepieSelected(recipeEL){
    this.recipeWasSelected.emit(recipeEL);
  }
}

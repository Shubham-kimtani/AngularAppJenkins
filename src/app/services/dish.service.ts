import { Injectable } from '@angular/core';
import {DISHES} from '../../shared/dishes';
import { Dish } from 'src/shared/dish';
// import { Dish } from 'src/shared/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  constructor() { }
  getdishes(): Promise<Dish[]>{return new Promise((resolve) => setTimeout(() => {resolve(DISHES)},5000))}
  getDishById(id): Promise<Dish>{return new Promise(resolve => {setTimeout(() => resolve(DISHES.filter((dish) => (dish.id===id))[0]),5000)});
  }
}

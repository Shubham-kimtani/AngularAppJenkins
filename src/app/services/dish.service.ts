import { Injectable } from '@angular/core';
import {DISHES} from '../../shared/dishes';
// import { Dish } from 'src/shared/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {


  constructor() { }

  getdishes(){
    return DISHES;
  }


}
import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from 'src/shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes;
  dishtosend;
  constructor(private dishSrv:DishService) { }
  
  ngOnInit() {
    this.dishSrv.getdishes()
    .then((dishes) => this.dishes=dishes
    );
  }
  dishdetail = (d) => {
    this.dishtosend = d;

  }

}

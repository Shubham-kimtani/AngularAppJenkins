import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../services/dish.service';
import {Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // @Input()
  dish
  constructor(private dishservice : DishService,
    private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    // this.dish = this.dishservice.getdishes()[0];
    let dishid = this.route.snapshot.params["id"];
    this.dish = this.dishservice.getDishById(dishid)
    .then((dish) => this.dish=dish)
  }

  goBack = () => {
    this.location.back();
  }
}

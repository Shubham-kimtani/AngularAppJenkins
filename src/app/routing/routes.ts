import { Routes } from "@angular/router";

import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { AppComponent } from '../app.component';
import { HelloComponent } from "../hello/hello.component";
import { DishdetailComponent } from "../dishdetail/dishdetail.component";
// import { HelloComponent } from '/hello.';

export const routes:Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'dishdetail/:id',component:DishdetailComponent},
    {path:'home',component:HomeComponent},
    {path:'menu',component:MenuComponent},
    {path:'hello',component:HelloComponent}
]


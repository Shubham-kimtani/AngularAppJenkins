import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatSelectModule} from '@angular/material/select';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {RoutingModule } from './routing/routing.module';
import { HelloComponent } from './hello/hello.component';
import { DishService } from './services/dish.service';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    HelloComponent,
    DishdetailComponent,
    LoginComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  entryComponents: [
    LoginComponent,  //Login modle leverages the dialog component.thats why
    SignupComponent   
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }

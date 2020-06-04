import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openSignupDialog = () => {
    this.dialog.open(SignupComponent,{width:"1200px",height:"500px"})
  }

  openLoginDialog = () => {
    this.dialog.open(LoginComponent,{width:"1200px",height:"500px"});
  }
}

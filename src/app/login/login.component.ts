import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {name: "",password: "", remember: false}
  constructor(private dialogref:MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  Submit = () => {
    console.log(this.user.name,this.user.remember);
    this.dialogref.close();
  }
}

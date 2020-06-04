import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Contact, Feedback } from 'src/shared/feedback';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // @ViewChild('feedbackform') feedbackformDirective; 
  feedbackform : FormGroup;
  contactType = Contact;
  feedback: Feedback;
  constructor(private fb:FormBuilder,private dialog:MatDialogRef<SignupComponent>) {
    this.onBuild();
   }

  ngOnInit() {
  }

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  }

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must be of 10 digits'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };
  onBuild = () => {
    this.feedbackform = this.fb.group({
      firstname: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(4)]],
    lastname:['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    telnum:[0,[Validators.required,Validators.pattern]],
    agree:false,
    contacttype:['',Validators.required],
    feedback:['',Validators.required]
    })

    this.feedbackform.valueChanges
    .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data){
    if(!this.feedbackform){return;}
    const form = this.feedbackform;
    for(const field in this.formErrors){
        if(this.formErrors.hasOwnProperty(field)){
          this.formErrors[field] = '';
          const control = form.get(field);
          if (control && control.dirty && !control.valid){
            const messages = this.validationMessages[field];
            for (const key in control.errors) {
              if (control.errors.hasOwnProperty(key)) {
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
    }
  }

  onSubmit = () => {
    this.feedback = this.feedbackform.value;
    console.log(this.feedbackform.value);
    console.log(this.feedback)
    this.feedbackform.reset({
      firstname: '',
      lastname:'',
      email: '',
      telnum:0,
      agree:false,
      contacttype:'',
      feedback:''
    });
    // this.feedbackformDirective.resetForm();
    this.dialog.close();
  }
  
}

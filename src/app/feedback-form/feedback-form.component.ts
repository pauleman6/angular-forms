import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Feedback,ContactType} from './feedback';


@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType= ContactType;
  
  constructor(private fb: FormBuilder) {
    this.buildForm();
   }

  ngOnInit() {
  }

  buildForm(){
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: [0, Validators.required],
      email: ['', Validators.required],
      contactType: ['None', Validators.required],
      message: ['', Validators.required]
    });
    
  }

  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
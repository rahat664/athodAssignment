import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {formsControls} from "../model/forms-controls";
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit{

  myForm: FormGroup;
  formControls: any[] = formsControls

  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.myForm = this.fb.group({});
    for (const control of formsControls) {
      const validators = [];
      if (control.mandatory) {
        validators.push(Validators.required);
      }
      if (control.maxLength) {
        validators.push(Validators.maxLength(control.maxLength));
      }
      if (control.minLength) {
        validators.push(Validators.minLength(control.minLength));
      }
      if (control.maxValue) {
        validators.push(Validators.max(control.maxValue));
      }
      if (control.minValue) {
        validators.push(Validators.min(control.minValue));
      }

      if (control.type === 'Text') {
        this.myForm.addControl(control.label, this.fb.control('', validators));
      } else if (control.type === 'Numeric') {
        this.myForm.addControl(control.label, this.fb.control('', [...validators, Validators.pattern(/^[0-9]+$/)]));
        this.myForm.get(control.label).valueChanges.subscribe((value)=> {
          const valueToStr = value.toString()
          if (valueToStr.length < control.minLength) {
            this.myForm.get(control.label).setErrors({'minlength': 'minimum length is'+ control.minLength})
          }
          else if (valueToStr.length > control.maxLength) {
            this.myForm.get(control.label).setErrors({'maxlength': 'maximum length is'+ control.maxLength})
          }
        })
      } else if (control.type === 'RadioButton') {
        this.myForm.addControl(control.label, this.fb.control(null, validators));
      } else if (control.type === 'Single Choice') {
        this.myForm.addControl(control.label, this.fb.control(null, validators));
      }
    }

  }


  onSubmit() {
    this.myForm.markAllAsTouched();
    console.log(this.myForm)
    if (this.myForm.valid) {
      console.log(this.myForm.value)
    }
  }

}

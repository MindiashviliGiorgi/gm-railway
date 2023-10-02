import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {
  myForm: FormGroup;

  constructor(private fb : FormBuilder){
    this.myForm = this.fb.group({
      fromWhere : ['', Validators.required],
      where : ['', Validators.required],
      date : ['', Validators.required],
      people : ['', Validators.required],
    })
  }

  ngOnInit():void {}

  onSubmit(){
    if(this.myForm.valid){
      const formData = this.myForm;
      console.log(formData.value)
    } else {
      this.myForm.markAllAsTouched()
    }
  }

}

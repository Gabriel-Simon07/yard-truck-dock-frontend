import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent implements OnInit {
    formGroup!: FormGroup;
    
  constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {
      this.formGroup = this.formBuilder.group({
        plate:[undefined],
        mark:[undefined],
        color:[undefined],
        driver_name:[undefined],
      });
    }

    

    public save() {
      console.log("SAVE!!!");
      
    }
}
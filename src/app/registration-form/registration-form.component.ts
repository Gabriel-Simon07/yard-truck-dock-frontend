import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent implements OnInit {
    formGroup!: FormGroup;
    
    ngOnInit(): void {

    }

    public save() {
      console.log("SAVE!!!");
      
    }
}
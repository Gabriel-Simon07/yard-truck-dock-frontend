import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ResgistrationFormService } from "./services/registration-form.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private registrationService: ResgistrationFormService) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      plate:[undefined],
      mark:[undefined],
      color:[undefined],
      driver_name:[undefined],
    });
  }

  public insert() {
    const formulario = this.formGroup.value;
    return this.registrationService.insert(formulario).subscribe();
  }
}

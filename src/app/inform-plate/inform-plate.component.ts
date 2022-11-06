import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InformPlateService } from "./services/inform-plate.service";

@Component({
  selector: 'app-inform-plate',
  templateUrl: './inform-plate.component.html',
  styleUrls: ['./inform-plate.component.scss'],
})
export class InformPlateComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private informPlateService: InformPlateService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      plate: [undefined, [Validators.maxLength(7), Validators.minLength(7)]]
    });
  }

  public insert() {
    const plate = this.formGroup.get('plate')?.value;
    return this.informPlateService.inserirPlaca(plate).subscribe();
  }
}

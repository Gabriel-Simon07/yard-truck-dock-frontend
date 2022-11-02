import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
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
      plate: [undefined]
    });
  }

  public insert() {
    const plate = this.formGroup.get('plate')?.value;
    return this.informPlateService.inserirPlaca(plate).subscribe();
  }

  public validateLengthPlate(): string {
    
    return "null";
  }
}

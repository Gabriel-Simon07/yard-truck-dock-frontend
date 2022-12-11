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

  public formatPlate(plate: any) {
    console.log(plate);
    const plate1 = plate.toUpperCase().trimStart().trimEnd().trim();
    console.log(plate1);
    return plate1;
  }

  public insert() {
    const plate = this.formGroup.get('plate')?.value;
    const plateFormated = this.formatPlate(plate);
    return this.informPlateService.insertPlate(plateFormated).subscribe(() => {
      console.log("Processing....");
    });
  }

  public findPlateById(id: number) {
    return this.informPlateService.findPlateById(id).subscribe();
  }
}

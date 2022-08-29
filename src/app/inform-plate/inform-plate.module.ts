import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InformPlateComponent } from "./inform-plate.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [InformPlateComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [InformPlateComponent]
})
export class InformPlateModule {

}

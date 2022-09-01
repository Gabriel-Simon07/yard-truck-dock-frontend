import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { InformPlateComponent } from "./inform-plate.component";
import { HttpClientModule } from '@angular/common/http';
import { InformPlateService } from "./services/inform-plate.service";

@NgModule({
  declarations: [InformPlateComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [InformPlateComponent],
  providers: [InformPlateService]
})
export class InformPlateModule {

}

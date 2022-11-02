import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationFormComponent } from "./registration-form.component";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    exports: [RegistrationFormComponent],
    declarations: [RegistrationFormComponent]
})
export class RegistrationFormModule {}
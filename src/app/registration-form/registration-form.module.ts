import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RegistrationFormComponent } from "./registration-form.component";
import { ResgistrationFormService } from "./services/registration-form.service";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
    exports: [RegistrationFormComponent],
    declarations: [RegistrationFormComponent],
    providers: [ResgistrationFormService]
})
export class RegistrationFormModule {}

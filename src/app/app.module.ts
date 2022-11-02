import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformPlateModule } from './inform-plate/inform-plate.module';
import { RegistrationFormModule } from './registration-form/registration-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InformPlateModule,
    HttpClientModule,
    RegistrationFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

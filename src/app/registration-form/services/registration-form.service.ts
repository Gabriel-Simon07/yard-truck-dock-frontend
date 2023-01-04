import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegistrationForm } from "../interfaces/registration-form";

@Injectable({
  providedIn: 'root'
})
export class ResgistrationFormService {

  private readonly URL = "http://localhost:8080/registration_form";

  constructor(private http: HttpClient) {}

  public insert(registration: any) {
    return this.http.post(this.URL, { registration });
  }
}

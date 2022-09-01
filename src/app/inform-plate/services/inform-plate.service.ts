import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InformPlate } from "../interfaces/inform-plate";

@Injectable({
  providedIn: 'root'
})
export class InformPlateService {
  constructor(private httpClient: HttpClient) {}

  public inserirPlaca(plate: InformPlate) {
    return this.httpClient.post<InformPlate>("http://localhost:8080/plate", {plate});
  }
}

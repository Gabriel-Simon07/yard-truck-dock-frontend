import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class InformPlateService {
  constructor(private httpClient: HttpClient) {}

  public inserirPlaca(plate: string) {
    return this.httpClient.post<any>("http://localhost:8080/plate", plate);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InformPlate } from "../interfaces/inform-plate";

@Injectable({
  providedIn: 'root'
})
export class InformPlateService {
  constructor(private httpClient: HttpClient) {}

  public insertPlate(plate: InformPlate) {
    return this.httpClient.post<InformPlate>("http://localhost:8080/plate", {plate});
  }

  public findPlateById(id: number) {
    return this.httpClient.get<InformPlate>(`http://localhost:8080/plate/${id}`);
  }
}

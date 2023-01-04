import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InformPlate } from "../interfaces/inform-plate";

@Injectable({
  providedIn: 'root'
})
export class InformPlateService {

  private readonly URL = "http://localhost:8080/plate";

  constructor(private httpClient: HttpClient) {}

  public insert(plate: any) {
    const plateFormated = this.formatPlate(plate);
    return this.save(plateFormated).subscribe();
  }

  public formatPlate(plate: any) {
    return plate.trim().toUpperCase();
  }

  public save(plate: InformPlate) {
    return this.httpClient.post<InformPlate>(this.URL, { plate });
  }
}

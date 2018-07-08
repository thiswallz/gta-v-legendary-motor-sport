import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { ApiService, Auto } from "src/app/core";

@Injectable({
  providedIn: "root"
})
export class StockService {
  private socket;
  private previusMarket: string;

  constructor(private apiService: ApiService) {}

  getAll(): Observable<Auto[]> {
    return this.apiService.get("data/cars.json").pipe(map(data => data));
  }

  get(id: number): Observable<Auto> {
    return this.apiService
      .get("data/cars.json")
      .pipe(map(data => data.filter(auto => auto.id === id)[0]));
  }
}

import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
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
}

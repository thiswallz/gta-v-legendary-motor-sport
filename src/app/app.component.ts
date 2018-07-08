import { Component } from "@angular/core";
import { SortBy } from "src/app/types/sort.enums";
import { Auto } from "./core";
import { StockService } from "./stock/stock.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  order: string = SortBy.NONE;
  autoList: Auto[] = [];

  constructor(private stockService: StockService) {
    this.stockService.getAll().subscribe(cars => {
      this.autoList = [...cars, ...this.autoList];
    });
  }

  sort() {
    if (this.order === SortBy.NONE) {
      this.order = SortBy.UP;
    } else if (this.order === SortBy.UP) {
      this.order = SortBy.DOWN;
    } else {
      this.order = SortBy.UP;
    }
  }
}

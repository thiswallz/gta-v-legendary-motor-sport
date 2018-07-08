import { Component, OnInit } from "@angular/core";
import { StockService } from "src/app/stock/stock.service";
import { Auto, SortBy } from "src/app/core";

@Component({
  selector: "gtav-stock-home",
  templateUrl: "./stock-home.component.html",
  styleUrls: ["./stock-home.component.scss"]
})
export class StockHomeComponent implements OnInit {
  order: string = SortBy.NONE;
  autoList: Auto[] = [];

  constructor(private stockService: StockService) {
    this.stockService.getAll().subscribe(cars => {
      this.autoList = [...cars, ...this.autoList];
    });
  }

  ngOnInit() {}

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

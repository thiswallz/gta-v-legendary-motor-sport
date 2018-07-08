import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Auto } from "src/app/core";
import { carDetailsMatch } from "src/app/util/regexp";
import { StockService } from "src/app/stock/stock.service";

@Component({
  selector: "gtav-stock-detail",
  templateUrl: "./stock-detail.component.html",
  styleUrls: ["./stock-detail.component.scss"]
})
export class StockDetailComponent implements OnInit {
  auto: Auto = new Auto();

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) {
    this.route.params.subscribe(res => {
      const id: number = parseInt(carDetailsMatch(res.url)[2], 10);
      this.stockService.get(id).subscribe(auto => (this.auto = auto));
    });
  }

  ngOnInit() {}
}

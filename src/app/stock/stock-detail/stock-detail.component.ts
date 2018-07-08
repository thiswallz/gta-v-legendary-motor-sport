import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Auto, Bar } from "src/app/core";
import { carDetailsMatch } from "src/app/util/regexp";
import { StockService } from "src/app/stock/stock.service";

export interface Statistic {
  title: string;
  bars: Bar[];
}
@Component({
  selector: "gtav-stock-detail",
  templateUrl: "./stock-detail.component.html",
  styleUrls: ["./stock-detail.component.scss"]
})
export class StockDetailComponent implements OnInit {
  readonly numberOfBars = 5;
  readonly standarWidthBar = 20;
  auto: Auto = new Auto();
  statistics: Statistic[] = [];

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService
  ) {
    this.route.params.subscribe(res => {
      const id: number = parseInt(carDetailsMatch(res.url)[2], 10);
      this.stockService.get(id).subscribe(auto => {
        this.auto = auto;
        this.calculateStatistics();
      });
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  calculateStatistics() {
    this.addStatistic("Top Speed", "speed");
    this.addStatistic("Acceleration", "acceleration");
    this.addStatistic("Braking", "braking");
    this.addStatistic("Traction", "handling");
  }

  addStatistic(title: string, property: string): void {
    this.statistics = [
      {
        title: title,
        bars: this.generateLine(this.auto.statistics[property])
      },
      ...this.statistics
    ];
  }

  generateLine(amount: number) {
    let bars: Bar[] = [];
    for (let i = 1; i <= this.numberOfBars; i++) {
      bars = [...bars, new Bar(this.calculateBar(amount, i))];
    }
    return bars;
  }

  calculateBar(amount: number, indexBar: number): number {
    const substraction = amount - (indexBar - 1) * this.standarWidthBar;
    if (amount >= indexBar * this.standarWidthBar) {
      return 100;
    } else if (substraction > 0) {
      return (substraction * 100) / this.standarWidthBar;
    }
    return 0;
  }
}

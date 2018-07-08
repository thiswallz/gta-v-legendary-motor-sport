import { Component, OnChanges, Input } from "@angular/core";
import { Bar } from "src/app/core";

@Component({
  selector: "gtav-statistics-list-bar",
  templateUrl: "./statistics-list-bar.component.html",
  styleUrls: ["./statistics-list-bar.component.css"]
})
export class StatisticsListBarComponent implements OnChanges {
  @Input() bars: Bar[] = [];

  constructor() {}

  ngOnChanges() {}
}

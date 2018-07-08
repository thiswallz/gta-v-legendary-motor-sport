import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "gtav-statistics-bar",
  templateUrl: "./statistics-bar.component.html",
  styleUrls: ["./statistics-bar.component.css"]
})
export class StatisticsBarComponent implements OnInit {
  @Input() width: number = 0;

  constructor() {}

  ngOnInit() {}
}

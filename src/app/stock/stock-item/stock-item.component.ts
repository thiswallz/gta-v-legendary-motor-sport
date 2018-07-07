import { Component, OnInit, Input } from "@angular/core";
import { Auto } from "src/app/model/auto.model";

@Component({
  selector: "gtav-stock-item",
  templateUrl: "./stock-item.component.html",
  styleUrls: ["./stock-item.component.scss"]
})
export class StockItemComponent implements OnInit {
  @Input() item: Auto;

  constructor() {}

  ngOnInit() {}
}

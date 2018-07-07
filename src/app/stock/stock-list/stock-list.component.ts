import { Component, OnInit, Input } from "@angular/core";
import { Auto } from "src/app/model/auto.model";

@Component({
  selector: "gtav-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.scss"]
})
export class StockListComponent implements OnInit {
  @Input() list: Auto[];

  constructor() {}

  ngOnInit() {
    console.log(this.list);
  }
}

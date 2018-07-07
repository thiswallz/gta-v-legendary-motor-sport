import { Component, OnInit, Input, ElementRef, ViewChild } from "@angular/core";
import { Auto } from "src/app/model/auto.model";

@Component({
  selector: "gtav-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.scss"]
})
export class StockListComponent implements OnInit {
  @ViewChild("onMouseOverDefaultId") audioPlayerRef: ElementRef;
  @Input() list: Auto[];

  constructor() {}

  ngOnInit() {
    console.log(this.list);
  }

  onMouseEnterEmitSound() {
    this.audioPlayerRef.nativeElement.pause();
    this.audioPlayerRef.nativeElement.currentTime = 0;
    this.audioPlayerRef.nativeElement.play();
  }
}

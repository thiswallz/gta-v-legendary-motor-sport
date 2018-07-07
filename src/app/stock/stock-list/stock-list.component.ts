import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ElementRef,
  ViewChild
} from "@angular/core";
import { Auto } from "src/app/model/auto.model";
import { SortType, SortBy } from "src/app/types/sort.enums";

const DEFAULT_SORT_COLUMN = "id";
const DEFAULT_SORT_TYPE = SortType.ASC;

@Component({
  selector: "gtav-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.scss"]
})
export class StockListComponent implements OnInit, OnChanges {
  @ViewChild("onMouseOverDefaultId") audioPlayerRef: ElementRef;
  @Input() list: Auto[];
  @Input() order: string;
  sortProperty: string = DEFAULT_SORT_COLUMN;
  sortType: string = DEFAULT_SORT_TYPE;

  constructor() {}

  ngOnInit() {
    console.log(this.list);
  }

  ngOnChanges() {
    console.log(this.order);
    if (this.order === SortBy.UP) {
      this.sortProperty = "price";
      this.sortType = SortBy.UP;
    } else if (this.order === SortBy.DOWN) {
      this.sortProperty = "price";
      this.sortType = SortBy.DOWN;
    } else if (this.order === SortBy.NONE) {
      this.sortProperty = DEFAULT_SORT_COLUMN;
    }
  }

  onMouseEnterEmitSound() {
    this.audioPlayerRef.nativeElement.pause();
    this.audioPlayerRef.nativeElement.currentTime = 0;
    this.audioPlayerRef.nativeElement.play();
  }
}

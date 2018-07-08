import {
  Component,
  OnChanges,
  Input,
  ElementRef,
  ViewChild
} from "@angular/core";
import { SortType, SortBy, SortColumn } from "src/app/types/sort.enums";
import { Auto } from "src/app/core";

@Component({
  selector: "gtav-stock-list",
  templateUrl: "./stock-list.component.html",
  styleUrls: ["./stock-list.component.scss"]
})
export class StockListComponent implements OnChanges {
  @ViewChild("onMouseOverDefaultId") audioPlayerRef: ElementRef;
  @Input() list: Auto[];
  @Input() order: string;
  sortProperty: string = SortColumn.ID;
  sortType: string = SortType.ASC;

  constructor() {}

  ngOnChanges() {
    this.sort(this.order);
  }

  onMouseEnterEmitSound() {
    this.reproduce();
  }

  reproduce() {
    this.audioPlayerRef.nativeElement.pause();
    this.audioPlayerRef.nativeElement.currentTime = 0;
    this.audioPlayerRef.nativeElement.play();
  }

  sort(order: string) {
    if (order === SortBy.UP || order === SortBy.DOWN) {
      this.setDefaultProperty();
      this.sortType = order === SortBy.UP ? SortBy.UP : SortBy.DOWN;
    } else if (order === SortBy.NONE) {
      this.sortProperty = SortColumn.ID;
    }
  }

  setDefaultProperty() {
    this.sortProperty = SortColumn.PRICE;
  }
}

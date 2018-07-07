import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StockItemComponent } from "./stock-item/stock-item.component";
import { StockListComponent } from "./stock-list/stock-list.component";
import { MatIconModule } from "@angular/material/icon";
import { Truncate } from "src/app/pipes/truncate.pipe";

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [StockItemComponent, StockListComponent, Truncate],
  exports: [StockItemComponent, StockListComponent]
})
export class StockModule {}

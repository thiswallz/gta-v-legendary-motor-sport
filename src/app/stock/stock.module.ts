import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { StockItemComponent } from "./stock-item/stock-item.component";
import { StockListComponent } from "./stock-list/stock-list.component";

@NgModule({
  imports: [CommonModule, MatGridListModule],
  declarations: [StockItemComponent, StockListComponent],
  exports: [StockItemComponent, StockListComponent]
})
export class StockModule {}

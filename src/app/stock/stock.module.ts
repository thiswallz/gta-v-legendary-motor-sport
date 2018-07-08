import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StockItemComponent } from "./stock-item/stock-item.component";
import { StockListComponent } from "./stock-list/stock-list.component";
import { StockService } from "./stock.service";
import { StockHomeComponent } from "./stock-home/stock-home.component";
import { StockDetailComponent } from "./stock-detail/stock-detail.component";
import { Truncate, SortPipe } from "src/app/core";
import { ContainersModule } from "src/app/containers/containers.module";

@NgModule({
  imports: [CommonModule, ContainersModule],
  declarations: [
    StockItemComponent,
    StockListComponent,
    Truncate,
    SortPipe,
    StockHomeComponent,
    StockDetailComponent
  ],
  exports: [StockItemComponent, StockListComponent],
  providers: [StockService]
})
export class StockModule {}

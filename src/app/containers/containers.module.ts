import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CircleColorComponent } from "./circle-color/circle-color.component";
import { CircleListColorComponent } from "./circle-list-color/circle-list-color.component";
import { StatisticsBarComponent } from "./statistics-bar/statistics-bar.component";
import { StatisticsListBarComponent } from "./statistics-list-bar/statistics-list-bar.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    CircleColorComponent,
    CircleListColorComponent,
    StatisticsBarComponent,
    StatisticsListBarComponent
  ],
  exports: [
    CircleColorComponent,
    CircleListColorComponent,
    StatisticsBarComponent,
    StatisticsListBarComponent
  ]
})
export class ContainersModule {}

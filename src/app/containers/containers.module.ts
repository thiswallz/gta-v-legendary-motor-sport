import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CircleColorComponent } from "./circle-color/circle-color.component";
import { CircleListColorComponent } from "./circle-list-color/circle-list-color.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CircleColorComponent, CircleListColorComponent],
  exports: [CircleColorComponent, CircleListColorComponent]
})
export class ContainersModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StockModule } from "./stock/stock.module";
import { CoreModule } from "./core";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, StockModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

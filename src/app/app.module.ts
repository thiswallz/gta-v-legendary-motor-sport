import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule
} from "@angular/material";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StockModule } from "./stock/stock.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    StockModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

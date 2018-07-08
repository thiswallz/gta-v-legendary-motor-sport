import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  UrlSegment,
  UrlMatchResult
} from "@angular/router";
import { StockHomeComponent } from "./stock/stock-home/stock-home.component";
import { StockDetailComponent } from "./stock/stock-detail/stock-detail.component";
import { carDetailsMatch } from "./util/regexp";

export function SpecialDetailMatcher(url: UrlSegment[]): UrlMatchResult {
  if (url.length === 0) {
    return null;
  }
  const param = url[0].toString();
  const matches = carDetailsMatch(param);
  if (matches) {
    return { consumed: url, posParams: { url: url[0] } };
  }
  return null;
}

export const routes: Routes = [
  {
    path: "",
    component: StockHomeComponent
  },
  {
    matcher: SpecialDetailMatcher,
    component: StockDetailComponent
  }
];

import { Component } from "@angular/core";
import { Auto } from "./model/auto.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  order: string = "price";
  autoList: Auto[] = [
    {
      id: 1,
      model: "Karin 190z",
      category: "Part of The Doomsday Heist",
      price: 900000,
      users: 2
    },
    {
      id: 2,
      model: "Pfister 811",
      category: "Part of Finance and Felony",
      price: 1135000,
      users: 2
    },
    {
      id: 2,
      model: "Pfister 811",
      category: "Part of Finance and Felony",
      price: 1135000,
      users: 2
    },
    {
      id: 2,
      model: "Pfister 811",
      category: "Part of Finance and Felony",
      price: 1135000,
      users: 2
    },
    {
      id: 2,
      model: "Pfister 811",
      category: "Part of Finance and Felony",
      price: 1135000,
      users: 2
    }
  ];
}

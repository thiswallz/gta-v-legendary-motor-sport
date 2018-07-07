import { Component } from "@angular/core";
import { Auto } from "./model/auto.model";

enum SortBy {
  NONE = "none",
  UP = "up",
  DOWN = "down"
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "app";
  order: string = SortBy.NONE;

  autoList: Auto[] = [
    {
      id: 1,
      model: "Karin 190z",
      category: "Part of The Doomsday Heist",
      price: 1900220,
      users: 2
    },
    {
      id: 2,
      model: "Pfister 811 3232 44122 4545222 22",
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

  constructor() {
    for (var i = 0; i <= 20; i++) {
      this.autoList.push({
        id: 2,
        model: "Pfister 811",
        category: "Part of Finance and Felony",
        price: 1135000,
        users: 2
      });
    }
  }

  sort() {
    if (this.order === SortBy.NONE) {
      this.order = SortBy.UP;
    } else if (this.order === SortBy.UP) {
      this.order = SortBy.DOWN;
    } else {
      this.order = SortBy.UP;
    }
  }
}

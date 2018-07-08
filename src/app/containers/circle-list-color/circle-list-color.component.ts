import { Component, OnInit } from "@angular/core";

export class Color {
  color: string;
  selected: boolean;

  constructor(color: string) {
    this.color = color;
  }
}

@Component({
  selector: "gtav-circle-list-color",
  templateUrl: "./circle-list-color.component.html",
  styleUrls: ["./circle-list-color.component.scss"]
})
export class CircleListColorComponent implements OnInit {
  list: Color[] = [];

  constructor() {}

  ngOnInit() {
    this.add("#cc0300");
    this.add("#fe0299");
    this.add("#fefe00");
    this.add("#fdac08");
    this.add("#64cc33");
    this.add("#0364cc");
    this.add("#181818");
    this.add("#fefefe");
  }

  select(index: number) {
    this.list = this.list.map((circle, i) => {
      circle.selected = i === index ? true : false;
      return circle;
    });
  }

  add(color: string) {
    this.list = [...this.list, new Color(color)];
  }
}

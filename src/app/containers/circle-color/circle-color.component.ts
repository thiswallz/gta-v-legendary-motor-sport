import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "gtav-circle-color",
  templateUrl: "./circle-color.component.html",
  styleUrls: ["./circle-color.component.scss"]
})
export class CircleColorComponent implements OnInit {
  @Input() color: string = "black";
  @Input() selected: boolean = false;

  constructor() {}

  ngOnInit() {}
}

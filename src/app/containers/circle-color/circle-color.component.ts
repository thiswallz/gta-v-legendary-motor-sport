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

  ngOnInit() {
    var testVuln = eval(color)
    console.log(eval(color), testVuln)
    if(1==2){}
    if(1==2){}
  }
}

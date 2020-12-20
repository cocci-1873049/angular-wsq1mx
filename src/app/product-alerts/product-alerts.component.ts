import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  /**
   * questo componente riceve in input un product
   * e in output una notifica
   */
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}

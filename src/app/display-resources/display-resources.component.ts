import { Component, OnInit } from '@angular/core';
import {WoodService} from "../core/resources/wood.service";

@Component({
  selector: 'app-display-resources',
  templateUrl: './display-resources.component.html',
  styleUrls: ['./display-resources.component.css']
})
export class DisplayResourcesComponent implements OnInit {
  public woodAmount: number = 0;

  constructor(private wood: WoodService) {
  }

  ngOnInit() {
    this.wood.getStream().subscribe(
      value => this.woodAmount = value,
      err => console.log(err),
      () => console.log('done')
    );
  }
}

import { Injectable } from '@angular/core';
import {ClockService} from "../clock/clock.service";
import {BaseResource} from "./baseresource";

@Injectable()
export class WoodService extends BaseResource {

  constructor(clock: ClockService) {
    super();
    clock.register(this);

    this.income = 1.5;
  }

  public ontick(count: number) {
    this.amount += this.income;
    this.stream.next(this.amount);
  }
}

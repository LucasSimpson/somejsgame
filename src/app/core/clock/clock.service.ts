import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Tickable} from "./tickable";

@Injectable()
export class ClockService {
  private count: number;
  private stream: Subject<number>;

  constructor() {
    this.count = 0;
    this.stream = new Subject<number>();
  }

  public start() {
    this.tick();
  }

  private tick() {
    let self: ClockService = this;

    setTimeout(function() {
      self.count += 1;
      self.stream.next(this.count);

      self.tick();
    }, 1000);
  }

  public getStream(): Subject<number> {
    return this.stream;
  }

  public register(ticker: Tickable) {

    // hack to get this keyword work
    // full discloser i really dunno wtf is happening here. this makes no sense
    // with my current understanding of how this works. Not only does this NOT
    // match the interface definition, it doesnt match anything, and yet this works
    // is there python-y magic stuff happening, like how self is first arg?
    let ontick_ = function(count: number) {
      ticker.ontick(ticker, count);
    };

    this.stream.subscribe(
      ontick_,
      ticker.onerror,
      ticker.oncomplete
    )
  }

}

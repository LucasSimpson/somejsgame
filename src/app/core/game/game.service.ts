import { Injectable } from '@angular/core';
import {Database} from "../database";
import {ClockService} from "../clock/clock.service";
import {Ticker} from "../clock/ticker";

@Injectable()
export class GameService extends Ticker {
  db: Database;
  clock: ClockService;

  constructor(clock: ClockService) {
    super();

    this.clock = clock;
    this.clock.register(this);

    // TODO: check for save file, or load defaults
    this.db = new Database();


    // this.db.put('AnotherKey', 666, () => {}, () => {});
    //
    // this.db.get("LucasKey", (value) => {
    //   console.log('first value is ' + value);
    //
    //   this.db.put("LucasKey", value + 10, () => {
    //     this.db.get("LucasKey", (value) => {
    //       console.log('second value is ' + value);
    //     }, (error) => {console.log('get error');});
    //   }, (error) => {console.log('put error ' + JSON.stringify(error));});
    // }, (error) => {
    //   console.log('uh oh' + error);
    // });
  }

  public start() {
    this.clock.start();
  }

  public ontick(count: number) {
    // check save
    if (count % (1*60) /* every ~minute */ == 0) {
      console.log('saving...');
      // TODO actually save
    }
  }

}

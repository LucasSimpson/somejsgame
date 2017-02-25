import {Subject} from "rxjs";
import {Ticker} from "../clock/ticker";

export class BaseResource extends Ticker{
  protected stream: Subject<number>;

  public amount: number = 0;
  public income: number = 0;

  constructor() {
    super();

    this.amount = 0;
    console.log('BaseResource stream about to init');
    this.stream = new Subject<number>();
  }

  public getStream():Subject<number> {
    return this.stream;
  }
}

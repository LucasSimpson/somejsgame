import {Tickable} from "./tickable";

export class Ticker implements Tickable {
  public ontick(count: number){}
  public onerror(error: any){}
  public oncomplete(){}
}

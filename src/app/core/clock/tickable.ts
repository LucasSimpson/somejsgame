export interface Tickable {
  ontick(Tickable, number);
  onerror(any);
  oncomplete();
}

import { Component, OnInit } from '@angular/core';
import {GameService} from "../core/game/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private game: GameService) { }

  ngOnInit() {
    this.game.start();
  }

}

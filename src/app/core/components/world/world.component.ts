import { Component, Input, OnInit } from '@angular/core';
import { Cell } from 'src/app/models/cell';
import { World } from 'src/app/models/world';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  @Input('width') width = 0;
  @Input('height') height = 0;

  world: World;

  constructor() {
  }

  ngOnInit(): void {
    this.world = new World(this.width, this.height);
  }

  changeCell(x: number, y: number): void {
    this.world.board[x][y].live=!this.world.board[x][y].live;
  }
}

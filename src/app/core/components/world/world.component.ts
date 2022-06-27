import { Component, Input, OnInit } from '@angular/core';
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

}

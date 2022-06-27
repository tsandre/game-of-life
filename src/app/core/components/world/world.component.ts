import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {
  @Input('width') width = 0;
  @Input('height') height = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}

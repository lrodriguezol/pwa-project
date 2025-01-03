import { Component, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  columns: string[] = ['catId', 'name', 'origin'];
  
  @Input() cats: Cat[] = [];

  constructor() {}
}
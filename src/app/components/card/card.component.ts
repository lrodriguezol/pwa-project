import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cat } from 'src/app/models/cat.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item: Cat = {
    name: '',
    origin: '',
    temperament: '',
    description:'',
    life_span: '',
    id: ''
  };

  constructor() {}
}
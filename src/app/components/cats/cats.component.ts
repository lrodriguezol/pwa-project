import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat.interface';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.3,
        })
      ),
      transition('void <=> *', animate(3500))
    ]),
  ],
})

export class CatsComponent implements OnInit {

  cats: Cat[] = [];
  currentView: string = 'table';
  loading: boolean = false;

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.loading = true;

    this.catsService.
      getAllCats().
      subscribe((cats) => {
        this.cats = cats;
        this.loading = false;
      });
  }

  changeView(view: string): void {
    this.currentView = view;
}

}

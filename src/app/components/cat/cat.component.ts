import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cat } from 'src/app/models/cat.interface';
import { CatsService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  cat : Cat | null = null;

  constructor(
    private catsService: CatsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier !== null) {
      this.catsService.getCatsById(identifier).subscribe((cat) => {
        if(!cat) {
          this.router.navigateByUrl('/');
          return;
        }
        this.cat = cat;
      })
    }
  }
}
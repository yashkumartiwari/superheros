import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SuperheroServiceService } from '../superhero-service.service';
import { startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  searchString = new FormControl();
  superHeroList: any;
  constructor(
    private _servce: SuperheroServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchString.valueChanges
      .pipe(
        startWith('') // Emit '' as the default value before the actual value
      )
      .subscribe((value: any) => {
        // Call your API here with the input value
        this.superHeroList = this._servce.getSuperHeroList(value);
      });
  }

  getData() {}

  superHeroDetail(id: any) {
    this.router.navigate(['/detail', id]);
  }
  biography(id: any) {
    this.router.navigate(['/biography', id]);
  }
}

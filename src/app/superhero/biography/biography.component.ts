import { Component, OnInit } from '@angular/core';
import { SuperheroServiceService } from '../superhero-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css'],
})
export class BiographyComponent implements OnInit {
  superhero: any;
  id: any;
  constructor(
    private service: SuperheroServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }
  getData() {
    console.log(this.id);

    this.superhero = this.service.getSuperHeroDetail(this.id);
    console.log(this.superhero);
  }
}

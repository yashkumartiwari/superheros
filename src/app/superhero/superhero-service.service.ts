import { Injectable } from '@angular/core';
import { superheroData } from './superheroData';

@Injectable({
  providedIn: 'root',
})
export class SuperheroServiceService {
  constructor() {}

  getSuperHeroList(value: any) {
    return value === ''
      ? superheroData
      : superheroData.filter((x) =>
          x.name.toLowerCase().includes(value.toLowerCase())
        );
  }
  getSuperHeroDetail(id: any) {
    return superheroData.find((x) => x.id == id);
  }
}

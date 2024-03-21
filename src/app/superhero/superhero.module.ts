import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperheroRoutingModule } from './superhero-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenderPipe } from './gender.pipe';
import { BiographyComponent } from './biography/biography.component';

@NgModule({
  declarations: [ListComponent, DetailComponent, GenderPipe, BiographyComponent],
  imports: [CommonModule, SuperheroRoutingModule, ReactiveFormsModule],
})
export class SuperheroModule {}

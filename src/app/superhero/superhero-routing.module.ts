import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { BiographyComponent } from './biography/biography.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'biography/:id', component: BiographyComponent },
  { path: '**', redirectTo: '/list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperheroRoutingModule {}

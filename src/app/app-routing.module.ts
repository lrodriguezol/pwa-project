import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsComponent } from './components/cats/cats.component';
import { CatComponent } from './components/cat/cat.component';

const routes: Routes = [
  { path: '', component: CatsComponent },
  { path: 'cat/:id', component: CatComponent },
  { path: '**', component: CatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
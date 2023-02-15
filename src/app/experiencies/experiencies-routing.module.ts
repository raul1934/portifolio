import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciesComponent } from './experiencies.component';

const routes: Routes = [
  { path: '', component: ExperienciesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienciesRoutingModule { }

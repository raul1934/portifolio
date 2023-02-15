import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienciesRoutingModule } from './experiencies-routing.module';
import { ExperienciesComponent } from './experiencies.component';
import { ExperienceComponent } from './components/experience/experience.component';


@NgModule({
  declarations: [
    ExperienciesComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperienciesRoutingModule
  ]
})
export class ExperienciesModule { }

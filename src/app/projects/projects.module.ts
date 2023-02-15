import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ProjectComponent } from './components/project/project.component';
import { ImgLazyLoadingModule } from '../shared/directives/img-lazy-loading/img-lazy-loading/img-lazy-loading.module';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { TechsComponent } from '../shared/components/techs/techs.component';

@NgModule({
  declarations: [
    GaleryComponent,
    ProjectsComponent,
    ProjectComponent,
    ProjectViewComponent,
    
    
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ImgLazyLoadingModule,
    TechsComponent
  ]
})
export class ProjectsModule { }

import { Component, Input } from '@angular/core';
import Project from 'src/app/shared/services/models/project.model';
import { ProjectViewService } from '../project-view/project-view.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input() project: Project | undefined;

  constructor(private projectViewService: ProjectViewService) { }

  view() {
    this.projectViewService.viewProject(this.project!);
  }
}

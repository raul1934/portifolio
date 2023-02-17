import { Component } from '@angular/core';
import { JsonService } from '../shared/services/json/json.service';
import Project from '../shared/services/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[];

  constructor(private jsonService: JsonService) {
    this.projects = this.jsonService.getProjects();
  }
}

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GtagService } from 'src/app/shared/services/gtag.service';
import Project from 'src/app/shared/services/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectViewService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private gtagService: GtagService
  ) { }

  private behaviorSubject = new BehaviorSubject<Project | undefined>(undefined);
  public currentProject = this.behaviorSubject.asObservable();

  private visibleSubject = new BehaviorSubject<boolean>(false);
  public currentVisible = this.visibleSubject.asObservable();

  viewProject(project: Project) {

    this.gtagService.addEvent(`/project_view/${project.name.replace(' ', '-').toLowerCase()}`);

    this.behaviorSubject.next(project);
    this.visibleSubject.next(true);
    this.document.body.classList.add("show-modal");
  }

  close() {
    this.visibleSubject.next(false);
    this.document.body.classList.remove("show-modal");
  }
}

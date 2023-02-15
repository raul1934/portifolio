import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { ProjectViewService } from './project-view.service';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent {

  @HostBinding('class.open') open: boolean = false;
  @ViewChild('wrapper') wrapper: ElementRef | undefined;

  public currentProject$ = this.projectViewService.currentProject;

  constructor(private projectViewService: ProjectViewService) {
    this.projectViewService.currentVisible.subscribe((value) => {
      this.wrapper?.nativeElement.scrollTo(0,0);
      this.open = value;
    });
  }

  closeModal() {
    this.projectViewService.close();
  }
}

import { AfterViewInit, Component, ElementRef, HostListener, Input, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements AfterViewInit {

  @Input() header: string = "";
  @Input() projects: any = [];

  @ViewChildren(ProjectComponent, { read: ElementRef }) projectsList: QueryList<ElementRef> | undefined;

  constructor(private renderer2: Renderer2) { }

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event("resize"));
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    if (this.projectsList !== undefined) {
      let high = this.projectsList.toArray().sort((a: ElementRef<any>, b: ElementRef<any>) => {
        if (a.nativeElement.offsetHeight < b.nativeElement.offsetHeight) {
          return 1;
        }
        if (a.nativeElement.offsetHeight > b.nativeElement.offsetHeight) {
          return -1;
        }
        return 0;
      })[0];

      this.projectsList.toArray().forEach((el: any) => {
        this.renderer2.setStyle(el.nativeElement, "min-height", high.nativeElement.offsetHeight + "px");
      });
    }
  }

}

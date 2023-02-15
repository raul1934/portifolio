import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ProjectViewService } from './projects/components/project-view/project-view.service';
import { GtagService } from './shared/services/gtag.service';
import { MenuService } from './shared/services/menu/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  menuOpen = false;
  showMenu = false;
  title = 'portifolio';

  constructor(private router: Router,
    private projectViewService: ProjectViewService,
    private menuService: MenuService,
    private gtagService: GtagService
  ) { }


  ngOnInit(): void {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {

      if (this.router.url.includes("cv")) {
        this.menuService.hideMenus();
      }
      else {
        this.menuService.showMenus();
      }

      this.menuOpen = false;
      this.projectViewService.close();
      this.gtagService.addEvent(event.urlAfterRedirects);
    });

    this.menuService.showMenuState().subscribe((value: boolean) => {
      this.showMenu = value;
    });
  }
}

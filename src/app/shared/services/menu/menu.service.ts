import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  showMenuState() {
    return this.menuSubject.asObservable();
  }

  public hideMenus() {
    this.menuSubject.next(false);
  }

  public showMenus() {
    this.menuSubject.next(true);
  }

}

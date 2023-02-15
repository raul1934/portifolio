import { Injectable } from '@angular/core';

declare const gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GtagService {

  constructor() { }

  addEvent(page: string) {

    gtag('event', 'page_view', {
      page_path: page,
    })
  }
}

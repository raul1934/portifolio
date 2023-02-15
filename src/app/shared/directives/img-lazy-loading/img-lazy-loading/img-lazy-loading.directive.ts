import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[appLazyLoad]' })
export class ImgLazyLoadingDirective {

  constructor(private el: ElementRef<HTMLImageElement>, private renderer: Renderer2,) {

    const supports = 'loading' in HTMLImageElement.prototype;

    this.el.nativeElement.classList.add('skeleton', 'skeleton-all');

    if (supports) {
      this.el.nativeElement.setAttribute('loading', 'lazy');
    }
  }

  @HostListener('load') onLoad() {
    this.el.nativeElement.classList.remove('skeleton', 'skeleton-all');
  }
}



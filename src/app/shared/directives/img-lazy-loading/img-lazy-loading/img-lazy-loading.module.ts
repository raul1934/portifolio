import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgLazyLoadingDirective } from './img-lazy-loading.directive';

@NgModule({
  declarations: [ImgLazyLoadingDirective],
  imports: [
    CommonModule
  ],
  exports:[ImgLazyLoadingDirective]
})
export class ImgLazyLoadingModule { }

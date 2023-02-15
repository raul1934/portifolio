import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-techs',
  imports:[CommonModule],
  templateUrl: './techs.component.html',
  styleUrls: ['./techs.component.scss'],
  standalone: true
})
export class TechsComponent {

  @Input() techs: Array<string> = [];
}

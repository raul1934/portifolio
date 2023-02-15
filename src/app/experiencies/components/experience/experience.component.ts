import { Component, Input } from '@angular/core';
import Experiency from 'src/app/shared/services/models/experiency.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  @Input() experiency: Experiency | undefined;

}

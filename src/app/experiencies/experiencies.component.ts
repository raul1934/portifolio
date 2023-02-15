import { Component } from '@angular/core';
import { JsonService } from '../shared/services/json/json.service';
import Experiency from '../shared/services/models/experiency.model';

@Component({
  selector: 'app-experiencies',
  templateUrl: './experiencies.component.html',
  styleUrls: ['./experiencies.component.scss']
})
export class ExperienciesComponent {
  experiencies: Experiency[];

  constructor(private jsonService: JsonService) {
    this.experiencies = this.jsonService.getExperiences();
  }
}

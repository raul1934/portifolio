import { Component } from '@angular/core';
import { JsonService } from '../shared/services/json/json.service';
import Education from '../shared/services/models/education.model';
import Experiency from '../shared/services/models/experiency.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {

  experiencies: Experiency[];
  educations: Education[];

  constructor(private jsonService: JsonService) {
    this.experiencies = this.jsonService.getExperiences();
    this.educations = this.jsonService.getEducations();
  }

}

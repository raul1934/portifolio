import { Injectable } from '@angular/core';
import Education from '../models/education.model';
import Experiency from '../models/experiency.model';
import Project from '../models/project.model';

import experiencesData from './experiences.json';
import educationsData from './educations.json';
import projectsData from './projects.json';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  public getExperiences(): Experiency[] {
    return experiencesData as unknown as Experiency[];
  }

  public getProjects(): Project[] {
    return projectsData as unknown as Project[];
  }

  public getEducations(): Education[] {
    return educationsData as unknown as Education[];
  }
}

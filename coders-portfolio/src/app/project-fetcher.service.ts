import { Injectable } from '@angular/core';
import { project } from './project';
import { testProjects } from './testProjects';

@Injectable({
  providedIn: 'root'
})
export class ProjectFetcherService {

  constructor() { }

  getProjects(): project[]
  {
    return testProjects;
  }
}

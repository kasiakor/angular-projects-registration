import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Competition } from '../interfaces/competition.interface';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient) {}

  getCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(
      'https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition'
    );
  }

  getCompetitionById(id: number): Observable<Competition> {
    return this.http.get<Competition>(
      'https://api.freeprojectapi.com/api/ProjectCompetition/competition/' + id
    );
  }

  createCompetition(obj: Competition) {
    return this.http.post(
      'https://api.freeprojectapi.com/api/ProjectCompetition/competition',
      obj
    );
  }

  submitProject(obj: Project) {
    return this.http.post(
      'https://api.freeprojectapi.com/api/ProjectCompetition/project',
      obj
    );
  }
}

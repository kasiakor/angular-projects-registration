import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Competition } from '../interfaces/competition.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient) {}

  getCompetitions() {
    return this.http.get(
      'https://api.freeprojectapi.com/api/ProjectCompetition/GetAllCompetition'
    );
  }

  createCompetition(obj: Competition) {
    return this.http.post(
      'https://api.freeprojectapi.com/api/ProjectCompetition/competition',
      obj
    );
  }
}

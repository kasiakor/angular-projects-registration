import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Competition } from '../../interfaces/competition.interface';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  competitionSrv = inject(CompetitionService);

  competitionsList$: Observable<Competition[]> =
    this.competitionSrv.getCompetitions();
}

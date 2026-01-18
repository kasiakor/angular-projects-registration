import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Competition } from '../../interfaces/competition.interface';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './competition.component.html',
})
export class CompetitionComponent implements OnInit {
  [x: string]: any;
  ngOnInit(): void {
    this.getAllCompetitions();
  }

  competitionForm: Competition = {
    id: 0,
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
  };

  competitionsList: Competition[] = [];

  competitionService = inject(CompetitionService);

  getAllCompetitions() {
    this.competitionService.getCompetitions().subscribe({
      next: (res) => {
        console.log('Competition list:', res);
        this.competitionsList = res;
        alert('Competition list retrieved successfully!');
      },
      error: () => {
        alert('API error!');
      },
    });
  }

  onSave() {
    this.competitionService.createCompetition(this.competitionForm).subscribe({
      next: (res) => {
        console.log('Competition created:', res);
        this.getAllCompetitions();
      },
      error: () => {
        alert('API error!');
      },
    });
    this.clear();
  }

  clear(): void {
    this.competitionForm = {
      id: 0,
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      status: '',
    };
  }

  edit(comp: Competition): void {}

  delete(id: number): void {}
}

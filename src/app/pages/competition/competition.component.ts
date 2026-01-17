import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Competition } from '../../interfaces/competition.interface';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-competition',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './competition.component.html',
})
export class CompetitionComponent {
  competitionForm: Competition = {
    id: 0,
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: '',
  };

  competitionService = inject(CompetitionService);

  onSave() {
    this.competitionService.createCompetition(this.competitionForm).subscribe({
      next: (res) => {
        console.log('Competition created:', res);
        alert('Competition created successfully!');
      },
      error: () => {
        alert('API error!');
      },
    });
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

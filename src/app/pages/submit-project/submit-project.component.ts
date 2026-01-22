import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Competition } from '../../interfaces/competition.interface';
import { Project } from '../../interfaces/project.interface';
import { AuthService } from '../../services/auth.service';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-submit-project',
  imports: [CommonModule, DatePipe, FormsModule],
  templateUrl: './submit-project.component.html',
  styleUrl: './submit-project.component.css',
})
export class SubmitProjectComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  competitionSrv = inject(CompetitionService);
  authSrv = inject(AuthService);

  competitionData: Competition | null = null;
  competitionId: number = 0;

  projectObj: Project = {
    submissionId: 0,
    competitionId: 0,
    userId: 0,
    projectTitle: '',
    description: '',
    githubLink: '',
    submissionDate: '',
    status: '',
    rank: 0,
  };

  ngOnInit() {
    this.competitionId = Number(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
    this.getCompetitionDetails();
    console.log('user ID:', this.authSrv.getUserId());
  }

  getCompetitionDetails() {
    this.competitionSrv.getCompetitionById(this.competitionId).subscribe({
      next: (res) => {
        console.log('Competition details:', res);
        this.competitionData = res;
      },
      error: () => {
        alert('API error!');
      },
    });
  }

  onSave() {
    debugger;

    this.projectObj.competitionId = this.competitionId;
    this.projectObj.userId = Number(this.authSrv.getUserId());
    debugger;

    this.competitionSrv.submitProject(this.projectObj).subscribe({
      next: (res) => {
        console.log('Project submitted successfully:', res);
        alert('Project submitted successfully!');
      },
      error: () => {
        alert('Error submitting project!');
      },
    });
  }
}

import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../testdata';

/**
 * This component displays a list of job postings
 * The top job postings that require the most visibilty should be displayed here
 */

@Component({
  selector: 'app-top-jobs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './top-jobs.component.html',
  styleUrl: './top-jobs.component.css'
})
export class TopJobsComponent implements OnInit {
  jobs: Job[] = [];
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    
      this.jobs = this.jobService.getTopJobs(4);
    
  }
}

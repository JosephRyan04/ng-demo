import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { testdata } from '../testdata';

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
export class TopJobsComponent {
  testdata = [...testdata];
}

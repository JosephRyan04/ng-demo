import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { testdata } from '../testdata';

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

import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Job } from '../testdata';
import { JobService } from '../services/job.service';
import {MatTableDataSource,MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import{ MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatSelect, MatOption } from '@angular/material/select';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [MatInputModule,MatSelect,MatOption, MatCardModule,MatTableModule,MatPaginatorModule, CommonModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent implements AfterViewInit{
  constructor(private jobService: JobService) { }
  jobs: Job[] = [];
  options: string[] = ['Digital Technology and Analytics'];
  
  displayedColumns: string[] = ['name','category','location'];
  dataSource = new MatTableDataSource<Job>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {

    this.jobs = this.jobService.getTopJobs(10);
    this.dataSource.data = this.jobs;
    this.dataSource.paginator = this.paginator;

  }
}

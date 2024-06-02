import { Routes } from '@angular/router';
import { TopJobsComponent } from './top-jobs/top-jobs.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', component: TopJobsComponent},
{path: 'angular', component: TopJobsComponent}];

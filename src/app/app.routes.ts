import { Routes } from '@angular/router';
import { TopJobsComponent } from './top-jobs/top-jobs.component';
import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchPageComponent},
    {path: 'angular', component: TopJobsComponent}];

import { Component } from '@angular/core';
import { TopJobsComponent } from "../top-jobs/top-jobs.component";
import { BannerComponent } from "../banner/banner.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TopJobsComponent, BannerComponent]
})
export class HomeComponent {

}

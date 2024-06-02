import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import {RouterModule} from '@angular/router';
import { TopJobsComponent } from "./top-jobs/top-jobs.component";
import { BannerComponent } from "./banner/banner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterModule, HeaderComponent, TopJobsComponent, BannerComponent]
})
export class AppComponent {
  title = 'jlryan04-demo';
}

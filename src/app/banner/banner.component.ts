import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

/**
 * This compenent displays a banner with an image that covers left half of the container
 * The right half consists text and a search button.
 */

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

}

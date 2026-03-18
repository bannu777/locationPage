import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-details',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './location-details.html',
  styleUrl: './location-details.css',
})
export class LocationDetails {

  @Input() data: any;
}

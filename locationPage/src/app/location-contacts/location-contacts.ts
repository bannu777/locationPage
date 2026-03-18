import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-contacts',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './location-contacts.html',
  styleUrl: './location-contacts.css',
})
export class LocationContacts {
  @Input() data:any[] = [];
}

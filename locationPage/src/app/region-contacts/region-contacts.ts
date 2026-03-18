import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-region-contacts',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './region-contacts.html',
  styleUrl: './region-contacts.css',
})
export class RegionContacts {

  @Input() data!: any[];
}

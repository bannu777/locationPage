import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-district-contacts',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './district-contacts.html',
  styleUrl: './district-contacts.css',
})
export class DistrictContacts {
 @Input() data!: any[];
}

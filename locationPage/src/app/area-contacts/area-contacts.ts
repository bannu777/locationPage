import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-contacts',
  imports: [CommonModule],
  templateUrl: './area-contacts.html',
  styleUrl: './area-contacts.css',
})
export class AreaContacts {
 @Input() data!: any[];
}



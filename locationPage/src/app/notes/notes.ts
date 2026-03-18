import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  imports: [CommonModule],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes {

  @Input() data!: any;
}

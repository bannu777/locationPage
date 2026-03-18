import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hierarchy',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './hierarchy.html',
  styleUrl: './hierarchy.css',
})
export class Hierarchy {

  @Input() data!: any;
}

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule
  ],
  standalone : true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 @Input() activeTab: string = '';
  @Output() tabChange = new EventEmitter<string>();

  
  setTab(tab: string) {
    this.tabChange.emit(tab);
  }
}

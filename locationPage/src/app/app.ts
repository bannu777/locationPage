import { Component, signal } from '@angular/core';
import { Location } from './location/location';

@Component({
  selector: 'app-root',
  imports: [Location],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

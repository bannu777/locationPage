import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LocationService } from '../services/location';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location implements OnInit{
locationDetails: any = {};
  hierarchy: any = {};

  activeTab: any = 'location';  


constructor(
    private locationService: LocationService,
    private cd: ChangeDetectorRef
  ) {}

  setTab(tab: string) {
  this.activeTab = tab;
}

ngOnInit() {
  this.locationService.getLocationData().subscribe(res => {
    console.log(res);
    const data = res.data;

    this.locationDetails = data.locationDetails;
    this.hierarchy = data.hierarchyDetails;

    console.log(this.locationDetails);
    console.log(this.hierarchy);
    console.log(this.locationDetails.LocationContacts);
    this.cd.detectChanges();
  });

  
}
}

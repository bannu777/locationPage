import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LocationService } from '../services/location';
import { Navbar } from '../navbar/navbar';
import { LocationDetails } from '../location-details/location-details';
import { LocationContacts } from '../location-contacts/location-contacts';
import { Hierarchy } from '../hierarchy/hierarchy';
import { RegionContacts } from '../region-contacts/region-contacts';
import { Notes } from '../notes/notes';
import { DistrictContacts } from '../district-contacts/district-contacts';
import { AreaContacts } from '../area-contacts/area-contacts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone : true,
  imports: [CommonModule,
    Navbar,
    LocationDetails,
    Notes,
    DistrictContacts,
    AreaContacts,
    LocationContacts,
    Hierarchy,
    RegionContacts
  ],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location implements OnInit{
locationDetails: any;
  hierarchy: any;

  activeTab: string = 'location';  


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

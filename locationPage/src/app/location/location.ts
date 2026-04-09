import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../services/location';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location implements OnInit {

  locationDetails: any = {};
  hierarchy: any = {};
  activeTab: any = 'location';

  constructor(private service: LocationService,
    private cd : ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.service.getLocationData()
      .pipe(
        map((res: any) => {

          const users = res.users;

          // ✅ LOCATION DETAILS (MATCH HTML)
          const locationDetails = {
            partLocationLink: users[0].id,
            locationName: users[0].company.name,
            timeZone: 'EST',
            address: users[0].address.address + ', ' + users[0].address.city,
            locationPhone: users[0].phone,

            cpoRegionNote: 'Generated from API',
            cpoDistrictNotes: 'Generated from API',
            cpoAreaNotes: 'Generated from API',
            cpoLocationNotes: 'Generated from API',

            // 🔥 IMPORTANT: used in HTML
            locationContacts: users.map((u: any) => ({
              position: 'AFM',
              email: u.email,
              name: u.firstName + ' ' + u.lastName,
              ssoId: u.id
            }))
          };

          const contacts = locationDetails.locationContacts;

          // ✅ HIERARCHY (MATCH HTML)
          const hierarchy = {
            partsDetails: {
              partsRegion: users[0].address.state,
              regionName: users[0].company.name,
              partsArea: users[1].address.state,
              areaName: users[1].address.city
            },

            // 🔥 used in region/area/district tables
            regionDetails: contacts.slice(0, 3),
            areaDetails: contacts.slice(3, 6),
            districtDetails: contacts.slice(6, 10),

            // 🔥 used in district top row
            partsDistrict: users[2].address.state,
            districtName: users[2].address.city
          };

          return { locationDetails, hierarchy };
        })
      )
      .subscribe((data: any) => {
        this.locationDetails = data.locationDetails;
        this.hierarchy = data.hierarchy;
        this.cd.detectChanges();
      });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
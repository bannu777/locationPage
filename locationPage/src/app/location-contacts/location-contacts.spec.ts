import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationContacts } from './location-contacts';

describe('LocationContacts', () => {
  let component: LocationContacts;
  let fixture: ComponentFixture<LocationContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationContacts],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationContacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

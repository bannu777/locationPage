import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictContacts } from './district-contacts';

describe('DistrictContacts', () => {
  let component: DistrictContacts;
  let fixture: ComponentFixture<DistrictContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictContacts],
    }).compileComponents();

    fixture = TestBed.createComponent(DistrictContacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

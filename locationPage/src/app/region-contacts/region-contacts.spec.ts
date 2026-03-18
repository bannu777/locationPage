import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionContacts } from './region-contacts';

describe('RegionContacts', () => {
  let component: RegionContacts;
  let fixture: ComponentFixture<RegionContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionContacts],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionContacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

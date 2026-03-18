import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaContacts } from './area-contacts';

describe('AreaContacts', () => {
  let component: AreaContacts;
  let fixture: ComponentFixture<AreaContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaContacts],
    }).compileComponents();

    fixture = TestBed.createComponent(AreaContacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentsPage } from './enrollments.page';

describe('EnrollmentsPage', () => {
  let component: EnrollmentsPage;
  let fixture: ComponentFixture<EnrollmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollmentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

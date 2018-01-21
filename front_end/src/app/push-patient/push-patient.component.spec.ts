import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushPatientComponent } from './push-patient.component';

describe('PushPatientComponent', () => {
  let component: PushPatientComponent;
  let fixture: ComponentFixture<PushPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

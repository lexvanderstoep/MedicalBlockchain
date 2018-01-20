import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataComponent } from './get-data.component';

describe('GetDataComponent', () => {
  let component: GetDataComponent;
  let fixture: ComponentFixture<GetDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAirlineFormComponent } from './add-airline-form.component';

describe('AddAirlineFormComponent', () => {
  let component: AddAirlineFormComponent;
  let fixture: ComponentFixture<AddAirlineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAirlineFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAirlineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

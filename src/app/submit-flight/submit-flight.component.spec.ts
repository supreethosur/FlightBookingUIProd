import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitFlightComponent } from './submit-flight.component';

describe('SubmitFlightComponent', () => {
  let component: SubmitFlightComponent;
  let fixture: ComponentFixture<SubmitFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFlightDisplayComponent } from './user-flight-display.component';

describe('UserFlightDisplayComponent', () => {
  let component: UserFlightDisplayComponent;
  let fixture: ComponentFixture<UserFlightDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFlightDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFlightDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

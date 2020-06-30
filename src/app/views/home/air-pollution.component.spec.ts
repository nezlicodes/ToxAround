import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPollutionComponent } from './air-pollution.component';

describe('AirPollutionComponent', () => {
  let component: AirPollutionComponent;
  let fixture: ComponentFixture<AirPollutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirPollutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

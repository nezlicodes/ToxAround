import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxSimgleComponent } from './tox-simgle.component';

describe('ToxSimgleComponent', () => {
  let component: ToxSimgleComponent;
  let fixture: ComponentFixture<ToxSimgleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxSimgleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxSimgleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

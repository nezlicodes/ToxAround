import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxSingleComponent } from './tox-single.component';

describe('ToxSingleComponent', () => {
  let component: ToxSingleComponent;
  let fixture: ComponentFixture<ToxSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

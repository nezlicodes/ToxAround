import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxCreateComponent } from './tox-create.component';

describe('ToxCreateComponent', () => {
  let component: ToxCreateComponent;
  let fixture: ComponentFixture<ToxCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

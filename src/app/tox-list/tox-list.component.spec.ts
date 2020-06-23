import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToxListComponent } from './tox-list.component';

describe('ToxListComponent', () => {
  let component: ToxListComponent;
  let fixture: ComponentFixture<ToxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

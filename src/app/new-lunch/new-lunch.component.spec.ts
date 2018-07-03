import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLunchComponent } from './new-lunch.component';

describe('NewLunchComponent', () => {
  let component: NewLunchComponent;
  let fixture: ComponentFixture<NewLunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayResourcesComponent } from './display-resources.component';

describe('DisplayResourcesComponent', () => {
  let component: DisplayResourcesComponent;
  let fixture: ComponentFixture<DisplayResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

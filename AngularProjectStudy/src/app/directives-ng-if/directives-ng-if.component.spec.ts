import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgIfComponent } from './directives-ng-if.component';

describe('DirectivesNgIfComponent', () => {
  let component: DirectivesNgIfComponent;
  let fixture: ComponentFixture<DirectivesNgIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesNgIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

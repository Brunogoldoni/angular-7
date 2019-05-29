import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgStyleComponent } from './directives-ng-style.component';

describe('DirectivesNgStyleComponent', () => {
  let component: DirectivesNgStyleComponent;
  let fixture: ComponentFixture<DirectivesNgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesNgStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

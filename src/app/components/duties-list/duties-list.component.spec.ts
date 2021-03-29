import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutiesListComponent } from './duties-list.component';

describe('DutiesListComponent', () => {
  let component: DutiesListComponent;
  let fixture: ComponentFixture<DutiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

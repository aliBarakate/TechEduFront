import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCoursComponent } from './crud-cours.component';

describe('CrudCoursComponent', () => {
  let component: CrudCoursComponent;
  let fixture: ComponentFixture<CrudCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

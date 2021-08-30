import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCycleComponent } from './crud-cycle.component';

describe('CrudCycleComponent', () => {
  let component: CrudCycleComponent;
  let fixture: ComponentFixture<CrudCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMatiereComponent } from './crud-matiere.component';

describe('CrudMatiereComponent', () => {
  let component: CrudMatiereComponent;
  let fixture: ComponentFixture<CrudMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

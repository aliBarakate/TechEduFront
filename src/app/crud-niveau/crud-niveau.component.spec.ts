import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudNiveauComponent } from './crud-niveau.component';

describe('CrudNiveauComponent', () => {
  let component: CrudNiveauComponent;
  let fixture: ComponentFixture<CrudNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

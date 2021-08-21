import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFiliereComponentComponent } from './crud-filiere-component.component';

describe('CrudFiliereComponentComponent', () => {
  let component: CrudFiliereComponentComponent;
  let fixture: ComponentFixture<CrudFiliereComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFiliereComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFiliereComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

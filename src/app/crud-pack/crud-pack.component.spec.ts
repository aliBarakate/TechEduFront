import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPackComponent } from './crud-pack.component';

describe('CrudPackComponent', () => {
  let component: CrudPackComponent;
  let fixture: ComponentFixture<CrudPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

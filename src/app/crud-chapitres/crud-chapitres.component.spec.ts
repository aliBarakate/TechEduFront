import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudChapitresComponent } from './crud-chapitres.component';

describe('CrudChapitresComponent', () => {
  let component: CrudChapitresComponent;
  let fixture: ComponentFixture<CrudChapitresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudChapitresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudChapitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

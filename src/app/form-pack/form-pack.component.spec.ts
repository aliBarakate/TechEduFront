import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPackComponent } from './form-pack.component';

describe('FormPackComponent', () => {
  let component: FormPackComponent;
  let fixture: ComponentFixture<FormPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

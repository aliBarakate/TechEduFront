import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLoginFormComponent } from './simple-login-form.component';

describe('SimpleLoginFormComponent', () => {
  let component: SimpleLoginFormComponent;
  let fixture: ComponentFixture<SimpleLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

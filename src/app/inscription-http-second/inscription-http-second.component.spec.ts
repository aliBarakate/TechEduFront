import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionHttpSecondComponent } from './inscription-http-second.component';

describe('InscriptionHttpSecondComponent', () => {
  let component: InscriptionHttpSecondComponent;
  let fixture: ComponentFixture<InscriptionHttpSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionHttpSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionHttpSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

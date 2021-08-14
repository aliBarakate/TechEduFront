import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutContenuPageComponent } from './ajout-contenu-page.component';

describe('AjoutContenuPageComponent', () => {
  let component: AjoutContenuPageComponent;
  let fixture: ComponentFixture<AjoutContenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutContenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutContenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

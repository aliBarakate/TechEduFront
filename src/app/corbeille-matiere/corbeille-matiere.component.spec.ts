import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilleMatiereComponent } from './corbeille-matiere.component';

describe('CorbeilleMatiereComponent', () => {
  let component: CorbeilleMatiereComponent;
  let fixture: ComponentFixture<CorbeilleMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilleMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

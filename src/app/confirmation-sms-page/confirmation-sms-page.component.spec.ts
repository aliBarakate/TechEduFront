import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationSmsPageComponent } from './confirmation-sms-page.component';

describe('ConfirmationSmsPageComponent', () => {
  let component: ConfirmationSmsPageComponent;
  let fixture: ComponentFixture<ConfirmationSmsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationSmsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationSmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

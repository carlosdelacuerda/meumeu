import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCapriceComponent } from './form-caprice.component';

describe('FormCapriceComponent', () => {
  let component: FormCapriceComponent;
  let fixture: ComponentFixture<FormCapriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCapriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCapriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

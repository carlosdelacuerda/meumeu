import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCapricesComponent } from './filter-caprices.component';

describe('FilterCapricesComponent', () => {
  let component: FilterCapricesComponent;
  let fixture: ComponentFixture<FilterCapricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCapricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCapricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

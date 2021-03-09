import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCapricesComponent } from './list-caprices.component';

describe('ListCapricesComponent', () => {
  let component: ListCapricesComponent;
  let fixture: ComponentFixture<ListCapricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCapricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCapricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

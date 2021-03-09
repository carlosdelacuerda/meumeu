import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCapriceComponent } from './detail-caprice.component';

describe('DetailCapriceComponent', () => {
  let component: DetailCapriceComponent;
  let fixture: ComponentFixture<DetailCapriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCapriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCapriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

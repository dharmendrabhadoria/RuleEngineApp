import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmapinfoComponent } from './productmapinfo.component';

describe('ProductmapinfoComponent', () => {
  let component: ProductmapinfoComponent;
  let fixture: ComponentFixture<ProductmapinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductmapinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductmapinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

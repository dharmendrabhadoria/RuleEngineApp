import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenifimasterComponent } from './benifimaster.component';

describe('BenifimasterComponent', () => {
  let component: BenifimasterComponent;
  let fixture: ComponentFixture<BenifimasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenifimasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenifimasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

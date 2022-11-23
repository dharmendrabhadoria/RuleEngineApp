import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenificiarymasterComponent } from './benificiarymaster.component';

describe('BenificiarymasterComponent', () => {
  let component: BenificiarymasterComponent;
  let fixture: ComponentFixture<BenificiarymasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenificiarymasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenificiarymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldmasterComponent } from './fieldmaster.component';

describe('FieldmasterComponent', () => {
  let component: FieldmasterComponent;
  let fixture: ComponentFixture<FieldmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

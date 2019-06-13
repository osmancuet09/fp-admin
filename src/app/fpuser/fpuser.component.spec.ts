import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpuserComponent } from './fpuser.component';

describe('FpuserComponent', () => {
  let component: FpuserComponent;
  let fixture: ComponentFixture<FpuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

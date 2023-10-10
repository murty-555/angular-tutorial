import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CBindingComponent } from './c-binding.component';

describe('CBindingComponent', () => {
  let component: CBindingComponent;
  let fixture: ComponentFixture<CBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CBindingComponent]
    });
    fixture = TestBed.createComponent(CBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

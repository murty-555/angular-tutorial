import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwBindingComponent } from './tw-binding.component';

describe('TwBindingComponent', () => {
  let component: TwBindingComponent;
  let fixture: ComponentFixture<TwBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwBindingComponent]
    });
    fixture = TestBed.createComponent(TwBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

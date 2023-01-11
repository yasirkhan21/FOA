import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveCouponComponent } from './remove-coupon.component';

describe('RemoveCouponComponent', () => {
  let component: RemoveCouponComponent;
  let fixture: ComponentFixture<RemoveCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveCouponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

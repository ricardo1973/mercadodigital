import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsShowcaseComponent } from './products-showcase.component';

describe('ProductsShowcaseComponent', () => {
  let component: ProductsShowcaseComponent;
  let fixture: ComponentFixture<ProductsShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsShowcaseComponent]
    });
    fixture = TestBed.createComponent(ProductsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

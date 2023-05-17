import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBreadcrumbComponent } from './product-breadcrumb.component';

describe('ProductBreadcrumbComponent', () => {
  let component: ProductBreadcrumbComponent;
  let fixture: ComponentFixture<ProductBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(ProductBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

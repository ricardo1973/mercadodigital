import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsBreadcrumbComponent } from './products-breadcrumb.component';

describe('ProductsBreadcrumbComponent', () => {
  let component: ProductsBreadcrumbComponent;
  let fixture: ComponentFixture<ProductsBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(ProductsBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

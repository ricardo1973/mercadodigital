import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBreadcrumbComponent } from './search-breadcrumb.component';

describe('SearchBreadcrumbComponent', () => {
  let component: SearchBreadcrumbComponent;
  let fixture: ComponentFixture<SearchBreadcrumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBreadcrumbComponent]
    });
    fixture = TestBed.createComponent(SearchBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

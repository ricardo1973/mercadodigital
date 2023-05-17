import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShowcaseComponent } from './search-showcase.component';

describe('SearchShowcaseComponent', () => {
  let component: SearchShowcaseComponent;
  let fixture: ComponentFixture<SearchShowcaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchShowcaseComponent]
    });
    fixture = TestBed.createComponent(SearchShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

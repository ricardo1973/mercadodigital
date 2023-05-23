import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarBoughtComponent } from './similar-bought.component';

describe('SimilarBoughtComponent', () => {
  let component: SimilarBoughtComponent;
  let fixture: ComponentFixture<SimilarBoughtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarBoughtComponent]
    });
    fixture = TestBed.createComponent(SimilarBoughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

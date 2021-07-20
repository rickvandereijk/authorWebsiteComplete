import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksIconComponent } from './books-icon.component';

describe('BooksIconComponent', () => {
  let component: BooksIconComponent;
  let fixture: ComponentFixture<BooksIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

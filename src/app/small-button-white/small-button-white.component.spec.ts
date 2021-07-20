import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallButtonWhiteComponent } from './small-button-white.component';

describe('SmallButtonWhiteComponent', () => {
  let component: SmallButtonWhiteComponent;
  let fixture: ComponentFixture<SmallButtonWhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallButtonWhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallButtonWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

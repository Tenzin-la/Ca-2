import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myapp1Component } from './myapp1.component';

describe('Myapp1Component', () => {
  let component: Myapp1Component;
  let fixture: ComponentFixture<Myapp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myapp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myapp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

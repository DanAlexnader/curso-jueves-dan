import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanComponent } from './dan.component';

describe('dan', () => {
  let component: DanComponent;
  let fixture: ComponentFixture<DanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

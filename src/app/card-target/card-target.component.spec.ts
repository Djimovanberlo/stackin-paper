import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTargetComponent } from './card-target.component';

describe('CardTargetComponent', () => {
  let component: CardTargetComponent;
  let fixture: ComponentFixture<CardTargetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTargetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

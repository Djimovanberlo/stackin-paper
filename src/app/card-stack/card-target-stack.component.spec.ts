import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTargetStackComponent } from './card-target-stack.component';

describe('CardTargetStackComponent', () => {
  let component: CardTargetStackComponent;
  let fixture: ComponentFixture<CardTargetStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTargetStackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTargetStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

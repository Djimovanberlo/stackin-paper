import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTargetPreviewComponent } from './card-target-preview.component';

describe('CardTargetPreviewComponent', () => {
  let component: CardTargetPreviewComponent;
  let fixture: ComponentFixture<CardTargetPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTargetPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTargetPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

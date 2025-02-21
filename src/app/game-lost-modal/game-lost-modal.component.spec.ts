import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLostModalComponent } from './game-lost-modal.component';

describe('GameLostModalComponent', () => {
  let component: GameLostModalComponent;
  let fixture: ComponentFixture<GameLostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameLostModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameLostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

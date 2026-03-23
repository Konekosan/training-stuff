import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingFrameworkComponent } from './training-framework.component';

describe('TrainingFrameworkComponent', () => {
  let component: TrainingFrameworkComponent;
  let fixture: ComponentFixture<TrainingFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingFrameworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

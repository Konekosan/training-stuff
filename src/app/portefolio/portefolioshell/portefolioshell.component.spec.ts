import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefolioshellComponent } from './portefolioshell.component';

describe('PortefolioshellComponent', () => {
  let component: PortefolioshellComponent;
  let fixture: ComponentFixture<PortefolioshellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortefolioshellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortefolioshellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

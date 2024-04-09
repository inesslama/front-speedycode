import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextingComponent } from './texting.component';

describe('TextingComponent', () => {
  let component: TextingComponent;
  let fixture: ComponentFixture<TextingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

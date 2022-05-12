import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewriterEffectComponent } from './typewriter-effect.component';

describe('TypewritterEffectComponent', () => {
  let component: TypewriterEffectComponent;
  let fixture: ComponentFixture<TypewriterEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypewriterEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypewriterEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

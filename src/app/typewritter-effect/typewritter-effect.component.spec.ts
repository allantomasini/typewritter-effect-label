import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypewritterEffectComponent } from './typewritter-effect.component';

describe('TypewritterEffectComponent', () => {
  let component: TypewritterEffectComponent;
  let fixture: ComponentFixture<TypewritterEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypewritterEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypewritterEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

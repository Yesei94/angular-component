import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonYesica } from './boton-yesica';

describe('BotonYesica', () => {
  let component: BotonYesica;
  let fixture: ComponentFixture<BotonYesica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonYesica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonYesica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

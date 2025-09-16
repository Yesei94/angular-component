import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonYesicaLib } from './boton-yesica-lib';

describe('BotonYesicaLib', () => {
  let component: BotonYesicaLib;
  let fixture: ComponentFixture<BotonYesicaLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonYesicaLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonYesicaLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

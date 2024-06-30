import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAcaComponent } from './datos-aca.component';

describe('DatosAcaComponent', () => {
  let component: DatosAcaComponent;
  let fixture: ComponentFixture<DatosAcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosAcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosAcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

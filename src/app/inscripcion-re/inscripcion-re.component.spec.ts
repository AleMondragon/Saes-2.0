import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionReComponent } from './inscripcion-re.component';

describe('InscripcionReComponent', () => {
  let component: InscripcionReComponent;
  let fixture: ComponentFixture<InscripcionReComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionReComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscripcionReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

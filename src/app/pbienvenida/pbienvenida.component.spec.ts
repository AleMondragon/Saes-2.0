import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PBienvenidaComponent } from './pbienvenida.component';

describe('PBienvenidaComponent', () => {
  let component: PBienvenidaComponent;
  let fixture: ComponentFixture<PBienvenidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PBienvenidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

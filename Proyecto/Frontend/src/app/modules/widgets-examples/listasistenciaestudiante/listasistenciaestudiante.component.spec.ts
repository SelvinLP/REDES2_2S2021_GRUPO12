import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasistenciaestudianteComponent } from './listasistenciaestudiante.component';

describe('ListasistenciaestudianteComponent', () => {
  let component: ListasistenciaestudianteComponent;
  let fixture: ComponentFixture<ListasistenciaestudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasistenciaestudianteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasistenciaestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasistenciaComponent } from './listasistencia.component';

describe('ListasistenciaComponent', () => {
  let component: ListasistenciaComponent;
  let fixture: ComponentFixture<ListasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

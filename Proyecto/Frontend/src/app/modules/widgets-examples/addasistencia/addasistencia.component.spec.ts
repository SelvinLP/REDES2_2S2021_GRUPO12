import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddasistenciaComponent } from './addasistencia.component';

describe('AddasistenciaComponent', () => {
  let component: AddasistenciaComponent;
  let fixture: ComponentFixture<AddasistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddasistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddasistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

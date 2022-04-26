import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioOfertasComponent } from './inicio-ofertas.component';

describe('InicioOfertasComponent', () => {
  let component: InicioOfertasComponent;
  let fixture: ComponentFixture<InicioOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

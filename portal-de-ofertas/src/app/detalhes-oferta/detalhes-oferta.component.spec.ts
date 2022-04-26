import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesOfertaComponent } from './detalhes-oferta.component';

describe('DetalhesOfertaComponent', () => {
  let component: DetalhesOfertaComponent;
  let fixture: ComponentFixture<DetalhesOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

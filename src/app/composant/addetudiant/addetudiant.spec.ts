import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addetudiant } from './addetudiant';

describe('Addetudiant', () => {
  let component: Addetudiant;
  let fixture: ComponentFixture<Addetudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addetudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addetudiant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

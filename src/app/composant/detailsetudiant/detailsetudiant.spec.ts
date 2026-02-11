import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailsetudiant } from './detailsetudiant';

describe('Detailsetudiant', () => {
  let component: Detailsetudiant;
  let fixture: ComponentFixture<Detailsetudiant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailsetudiant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detailsetudiant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

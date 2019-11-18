import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHomePage } from './lista-home.page';

describe('ListaHomePage', () => {
  let component: ListaHomePage;
  let fixture: ComponentFixture<ListaHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

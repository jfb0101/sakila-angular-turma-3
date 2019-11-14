import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditFilmComponent } from './create-edit-film.component';

describe('CreateEditFilmComponent', () => {
  let component: CreateEditFilmComponent;
  let fixture: ComponentFixture<CreateEditFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

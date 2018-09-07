import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolEditComponent } from './vol-edit.component';

describe('VolEditComponent', () => {
  let component: VolEditComponent;
  let fixture: ComponentFixture<VolEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

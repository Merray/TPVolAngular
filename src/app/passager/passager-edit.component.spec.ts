import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagerEditComponent } from './passager-edit.component';

describe('PassagerEditComponent', () => {
  let component: PassagerEditComponent;
  let fixture: ComponentFixture<PassagerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassagerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

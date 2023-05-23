import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateToolComponent } from './form-create-tool.component';

describe('FormCreateToolComponent', () => {
  let component: FormCreateToolComponent;
  let fixture: ComponentFixture<FormCreateToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreateToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreateToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

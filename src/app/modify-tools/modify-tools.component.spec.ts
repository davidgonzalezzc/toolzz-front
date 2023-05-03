import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyToolsComponent } from './modify-tools.component';

describe('ModifyToolsComponent', () => {
  let component: ModifyToolsComponent;
  let fixture: ComponentFixture<ModifyToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

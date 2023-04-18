import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToolComponent } from './list-tool.component';

describe('ListToolComponent', () => {
  let component: ListToolComponent;
  let fixture: ComponentFixture<ListToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListToolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './create-user.component';
import { HttpClientModule } from '@angular/common/http';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateUserComponent],
      imports: [ReactiveFormsModule,HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.user.value).toEqual({
      id: '',
      name: '',
      last: '',
      email: '',
      password: '',
      birthday: '',
      role: '',
    });
  });

  it('should update userObject properties on form submission', () => {
    component.user.setValue({
      id: '1',
      name: 'John',
      last: 'Doe',
      email: 'john@example.com',
      password: 'password123',
      birthday: '1990-01-01',
      role: 'admin',
    });

    component.onSubmit();

    expect(component.userObject).toEqual({
      name: 'John',
      last: 'Doe',
      email: 'john@example.com',
      password: 'password123',
      birthday: '1990-01-01',
      role: 'admin',
    });
  });
});

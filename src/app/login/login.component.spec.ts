import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { browser } from 'protractor';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter;

  beforeEach(async(() => {
    mockRouter = { navigate: jasmine.createSpy('navigate') };
    TestBed.configureTestingModule({
      imports: [FormsModule,RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [
        { provide: Router, useValue: mockRouter}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // when user name is given password is not given
  it('should show error user name is given password is not givenwhen submit is clicked', () => {
    component.uname = 'admin';
    const submitButton = fixture.debugElement.queryAll(By.css('button'))[0];
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.error).toBe('UserName And Password are Required');
  });

  // when userName is missing
  it('should show error if userName is missing when submit is clicked', () => {
    component.psw = 'admin';
    const submitButton = fixture.debugElement.queryAll(By.css('button'))[0];
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.error).toBe('UserName And Password are Required');
  });

  // if both are not present
  it('should show error if both are not present when submit is clicked', () => {
    const submitButton = fixture.debugElement.queryAll(By.css('button'))[0];
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.error).toBe('UserName And Password are Required');
  });

  // if user name is incorrect
  it('should show error if user name is incorrect when submit is clicked', () => {
    component.uname = 'Amit';
    component.psw = 'admin';
    const submitButton = fixture.debugElement.queryAll(By.css('button'))[0];
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.error).toBe('Incorrect Username or Password');
  });

  // if password is incorrect
  it('should show error if password is incorrect when submit is clicked', () => {
    component.uname = 'admin';
    component.psw = 'Amit';
    const submitButton = fixture.debugElement.queryAll(By.css('button'))[0];
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.error).toBe('Incorrect Username or Password');
  });

  // if both are incorrect
  it('should show error if both are incorrect when submit is clicked', () => {
    component.uname = 'Amit';
    component.psw = 'Amit';
    const submitButton = fixture.debugElement.queryAll(By.css('button'))[0];
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.error).toBe('Incorrect Username or Password');
  });


  // if password is correct we redirect to landingPage and check if it populated properly
  it('redirect if password is correct', () => {
    component.uname = 'admin';
    component.psw = 'admin';
    const submitButton = fixture.debugElement.queryAll(By.css('button'))[0];
    submitButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/landingPage']);
  });
});

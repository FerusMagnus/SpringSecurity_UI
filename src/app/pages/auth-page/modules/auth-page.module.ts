import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../shared/modules/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthPageComponent } from '../auth-page.component';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { RegisterFormComponent } from '../components/register-form/register-form.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthPageModule { }

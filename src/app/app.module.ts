import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgHcaptchaModule } from 'ng-hcaptcha';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvisibleComponent } from './invisible/invisible.component';
import { FormComponent } from './form/form.component';
import { RouterModule } from '@angular/router';
import { ProgrammaticallyComponent } from './programmatically/programmatically.component';

@NgModule({
  declarations: [
    AppComponent,
    InvisibleComponent,
    FormComponent,
    ProgrammaticallyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/form'
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'invisible',
        component: InvisibleComponent
      },
      {
        path: 'programmatically',
        component: ProgrammaticallyComponent
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    NgHcaptchaModule.forRoot({
      siteKey: environment.siteKey,
      languageCode: 'en'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

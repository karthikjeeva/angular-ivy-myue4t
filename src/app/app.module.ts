import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from '../app/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatautocomComponent } from './matautocom/matautocom.component';
import { ApproutingModule } from './approuting/approuting.module';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { MatautoobjectComponent } from './matautoobject/matautoobject.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ApproutingModule,
    AngularmaterialModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MatautocomComponent,
    MatautoobjectComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
